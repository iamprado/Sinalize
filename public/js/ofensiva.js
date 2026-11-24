// Cálculo da ofensiva (dias seguidos fazendo quiz).
// Fica num arquivo separado porque a Home e a dashboard usam a mesma conta.

// Transforma uma data no formato que vem do banco: 2026-11-23
function formatarData(data) {
    var ano = data.getFullYear();
    var mes = String(data.getMonth() + 1).padStart(2, "0");
    var dia = String(data.getDate()).padStart(2, "0");
    return `${ano}-${mes}-${dia}`;
}

// Recebe o vetor de tentativas (cada uma com o campo "dia") e devolve
// { dias: quantos dias seguidos, jogouHoje: true ou false }
function contarOfensiva(tentativas) {
    // 1. Monta um vetor com os dias sem repetir (duas tentativas no mesmo dia contam uma vez)
    var dias = [];
    for (var i = 0; i < tentativas.length; i++) {
        if (dias.indexOf(tentativas[i].dia) == -1) {
            dias.push(tentativas[i].dia);
        }
    }

    // 2. Começa a contar de hoje. Se hoje ainda não jogou, começa de ontem
    //    (a ofensiva só se perde quando passa um dia inteiro sem quiz)
    var esperado = new Date();
    var jogouHoje = dias[dias.length - 1] == formatarData(esperado);
    if (jogouHoje == false) {
        esperado.setDate(esperado.getDate() - 1);
    }

    // 3. Anda do dia mais recente para trás, contando enquanto os dias forem seguidos
    var ofensiva = 0;
    for (var j = dias.length - 1; j >= 0; j--) {
        if (dias[j] == formatarData(esperado)) {
            ofensiva++;
            esperado.setDate(esperado.getDate() - 1);
        } else {
            break; // achou um dia sem quiz: para de contar
        }
    }

    return { dias: ofensiva, jogouHoje: jogouHoje };
}
