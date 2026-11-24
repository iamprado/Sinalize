var database = require("../database/config");

// Todas as tentativas do usuário, da mais antiga para a mais nova.
// "dia" vem pronto no formato 2026-11-23 para o JavaScript calcular a ofensiva.
function listarPorUsuario(idUsuario) {
    var instrucaoSql = `
        SELECT id, tema, modo, acertos, total_perguntas,
               DATE_FORMAT(data_hora, '%Y-%m-%d') AS dia
          FROM tentativa
         WHERE fk_usuario = ${idUsuario}
         ORDER BY data_hora;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Os sinais errados (acertou = 0) na tentativa mais recente do usuário.
// A subconsulta acha o id da última tentativa (o maior id daquele usuário).
function listarErrosUltima(idUsuario) {
    var instrucaoSql = `
        SELECT sinal
          FROM resposta
         WHERE acertou = 0
           AND fk_tentativa = (SELECT MAX(id) FROM tentativa WHERE fk_usuario = ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Grava uma rodada do quiz. A data_hora é preenchida pelo banco (DEFAULT CURRENT_TIMESTAMP).
function registrarTentativa(idUsuario, tema, modo, acertos, total) {
    var instrucaoSql = `
        INSERT INTO tentativa (fk_usuario, tema, modo, acertos, total_perguntas)
        VALUES (${idUsuario}, '${tema}', '${modo}', ${acertos}, ${total});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Grava todas as respostas da tentativa em um único INSERT.
// O for monta uma linha de VALUES para cada resposta: (idTentativa, 'A', 1), (idTentativa, 'N', 0)...
function registrarRespostas(idTentativa, respostas) {
    var valores = [];
    for (var i = 0; i < respostas.length; i++) {
        var acertou = 0;
        if (respostas[i].acertou == true) {
            acertou = 1;
        }
        valores.push(`(${idTentativa}, '${respostas[i].sinal}', ${acertou})`);
    }

    var instrucaoSql = `
        INSERT INTO resposta (fk_tentativa, sinal, acertou)
        VALUES ${valores.join(", ")};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Média de acertos (em %) do usuário em cada tema.
// AVG faz a média das tentativas e GROUP BY separa uma linha por tema.
function mediaPorTema(idUsuario) {
    var instrucaoSql = `
        SELECT tema,
               ROUND(AVG(acertos / total_perguntas) * 100) AS media
          FROM tentativa
         WHERE fk_usuario = ${idUsuario}
         GROUP BY tema;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Os 5 sinais que o usuário mais errou.
// A tabela resposta não guarda o usuário, então o JOIN busca a tentativa de cada resposta
// para filtrar pelo fk_usuario. COUNT conta os erros de cada sinal.
function sinaisMaisErrados(idUsuario) {
    var instrucaoSql = `
        SELECT r.sinal, COUNT(*) AS erros
          FROM resposta r
          JOIN tentativa t ON r.fk_tentativa = t.id
         WHERE t.fk_usuario = ${idUsuario}
           AND r.acertou = 0
         GROUP BY r.sinal
         ORDER BY erros DESC
         LIMIT 5;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listarPorUsuario,
    listarErrosUltima,
    registrarTentativa,
    registrarRespostas,
    mediaPorTema,
    sinaisMaisErrados
};
