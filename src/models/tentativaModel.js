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

module.exports = {
    listarPorUsuario,
    listarErrosUltima
};
