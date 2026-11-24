// Vetores com todos os sinais do Sinalize, um por tema.
// São usados na Home (letras para revisar), no quiz e no Aprenda.
// tipo "foto" vira <img> na página; tipo "video" vira <video> (sinais com movimento).
// Para trocar um vídeo por foto, mude o "arquivo" para .png e o "tipo" para "foto".

var alfabeto = [
    { nome: "A", arquivo: "assets/sinais/alfabeto/A.png", tipo: "foto" },
    { nome: "B", arquivo: "assets/sinais/alfabeto/B.png", tipo: "foto" },
    { nome: "C", arquivo: "assets/sinais/alfabeto/C.png", tipo: "foto" },
    { nome: "D", arquivo: "assets/sinais/alfabeto/D.png", tipo: "foto" },
    { nome: "E", arquivo: "assets/sinais/alfabeto/E.png", tipo: "foto" },
    { nome: "F", arquivo: "assets/sinais/alfabeto/F.png", tipo: "foto" },
    { nome: "G", arquivo: "assets/sinais/alfabeto/G.png", tipo: "foto" },
    { nome: "H", arquivo: "assets/sinais/alfabeto/H.mp4", tipo: "video" },
    { nome: "I", arquivo: "assets/sinais/alfabeto/I.png", tipo: "foto" },
    { nome: "J", arquivo: "assets/sinais/alfabeto/J.mp4", tipo: "video" },
    { nome: "K", arquivo: "assets/sinais/alfabeto/K.mp4", tipo: "video" },
    { nome: "L", arquivo: "assets/sinais/alfabeto/L.png", tipo: "foto" },
    { nome: "M", arquivo: "assets/sinais/alfabeto/M.png", tipo: "foto" },
    { nome: "N", arquivo: "assets/sinais/alfabeto/N.png", tipo: "foto" },
    { nome: "O", arquivo: "assets/sinais/alfabeto/O.png", tipo: "foto" },
    { nome: "P", arquivo: "assets/sinais/alfabeto/P.png", tipo: "foto" },
    { nome: "Q", arquivo: "assets/sinais/alfabeto/Q.jpeg", tipo: "foto" },
    { nome: "R", arquivo: "assets/sinais/alfabeto/R.png", tipo: "foto" },
    { nome: "S", arquivo: "assets/sinais/alfabeto/S.png", tipo: "foto" },
    { nome: "T", arquivo: "assets/sinais/alfabeto/T.png", tipo: "foto" },
    { nome: "U", arquivo: "assets/sinais/alfabeto/U.png", tipo: "foto" },
    { nome: "V", arquivo: "assets/sinais/alfabeto/V.png", tipo: "foto" },
    { nome: "W", arquivo: "assets/sinais/alfabeto/W.png", tipo: "foto" },
    { nome: "X", arquivo: "assets/sinais/alfabeto/X.mp4", tipo: "video" },
    { nome: "Y", arquivo: "assets/sinais/alfabeto/Y.mp4", tipo: "video" },
    { nome: "Z", arquivo: "assets/sinais/alfabeto/Z.mp4", tipo: "video" }
];

var numeros = [
    { nome: "0", arquivo: "assets/sinais/numeros/0.mp4", tipo: "video" },
    { nome: "1", arquivo: "assets/sinais/numeros/1.mp4", tipo: "video" },
    { nome: "2", arquivo: "assets/sinais/numeros/2.mp4", tipo: "video" },
    { nome: "3", arquivo: "assets/sinais/numeros/3.mp4", tipo: "video" },
    { nome: "4", arquivo: "assets/sinais/numeros/4.mp4", tipo: "video" },
    { nome: "5", arquivo: "assets/sinais/numeros/5.mp4", tipo: "video" },
    { nome: "6", arquivo: "assets/sinais/numeros/6.mp4", tipo: "video" },
    { nome: "7", arquivo: "assets/sinais/numeros/7.mp4", tipo: "video" },
    { nome: "8", arquivo: "assets/sinais/numeros/8.mp4", tipo: "video" },
    { nome: "9", arquivo: "assets/sinais/numeros/9.mp4", tipo: "video" },
    { nome: "10", arquivo: "assets/sinais/numeros/10.mp4", tipo: "video" }
];

var cumprimentos = [
    { nome: "Oi", arquivo: "assets/sinais/cumprimentos/oi.mp4", tipo: "video" },
    { nome: "Tchau", arquivo: "assets/sinais/cumprimentos/tchau.mp4", tipo: "video" },
    { nome: "Bom dia", arquivo: "assets/sinais/cumprimentos/bom-dia.mp4", tipo: "video" },
    { nome: "Boa tarde", arquivo: "assets/sinais/cumprimentos/boa-tarde.mp4", tipo: "video" },
    { nome: "Boa noite", arquivo: "assets/sinais/cumprimentos/boa-noite.mp4", tipo: "video" },
    { nome: "Tudo bem?", arquivo: "assets/sinais/cumprimentos/tudo-bem.mp4", tipo: "video" },
    { nome: "Obrigado", arquivo: "assets/sinais/cumprimentos/obrigado.mp4", tipo: "video" },
    { nome: "Por favor", arquivo: "assets/sinais/cumprimentos/por-favor.mp4", tipo: "video" },
    { nome: "Desculpa", arquivo: "assets/sinais/cumprimentos/desculpa.mp4", tipo: "video" },
    { nome: "Prazer em conhecer", arquivo: "assets/sinais/cumprimentos/prazer-em-conhecer.mp4", tipo: "video" },
    { nome: "Nome", arquivo: "assets/sinais/cumprimentos/nome.mp4", tipo: "video" },
    { nome: "Sinal de nome", arquivo: "assets/sinais/cumprimentos/sinal-de-nome.mp4", tipo: "video" }
];

var familia = [
    { nome: "Família", arquivo: "assets/sinais/familia/familia.mp4", tipo: "video" },
    { nome: "Mãe", arquivo: "assets/sinais/familia/mae.mp4", tipo: "video" },
    { nome: "Pai", arquivo: "assets/sinais/familia/pai.mp4", tipo: "video" },
    { nome: "Filho", arquivo: "assets/sinais/familia/filho.mp4", tipo: "video" },
    { nome: "Filha", arquivo: "assets/sinais/familia/filha.mp4", tipo: "video" },
    { nome: "Irmão", arquivo: "assets/sinais/familia/irmao.mp4", tipo: "video" },
    { nome: "Irmã", arquivo: "assets/sinais/familia/irma.mp4", tipo: "video" },
    { nome: "Avô", arquivo: "assets/sinais/familia/avo-masculino.mp4", tipo: "video" },
    { nome: "Avó", arquivo: "assets/sinais/familia/avo-feminino.mp4", tipo: "video" },
    { nome: "Tio", arquivo: "assets/sinais/familia/tio.mp4", tipo: "video" },
    { nome: "Tia", arquivo: "assets/sinais/familia/tia.mp4", tipo: "video" },
    { nome: "Primo", arquivo: "assets/sinais/familia/primo.mp4", tipo: "video" }
];

// Informações de cada tema: o nome que aparece na tela, o vetor de sinais
// e como chamar cada item ("letra" no alfabeto, "número" nos números, "sinal" no resto).
// A chave (alfabeto, numeros...) é o valor que vai no endereço: quiz.html?tema=numeros
var temas = {
    alfabeto: { titulo: "Alfabeto", sinais: alfabeto, item: "letra", itens: "letras" },
    numeros: { titulo: "Números", sinais: numeros, item: "número", itens: "números" },
    cumprimentos: { titulo: "Cumprimentos", sinais: cumprimentos, item: "sinal", itens: "sinais" },
    familia: { titulo: "Família", sinais: familia, item: "sinal", itens: "sinais" }
};

// Procura um sinal pelo nome (ex.: "N" ou "Bom dia") em todos os temas e devolve o objeto dele
function buscarSinal(nome) {
    var listaDeTemas = [alfabeto, numeros, cumprimentos, familia];

    for (var t = 0; t < listaDeTemas.length; t++) {
        var sinais = listaDeTemas[t];
        for (var i = 0; i < sinais.length; i++) {
            if (sinais[i].nome == nome) {
                return sinais[i];
            }
        }
    }
    return null;
}

// Monta o HTML da foto ou do vídeo de um sinal.
// Se o arquivo ainda não foi gravado (não existe na pasta), o onerror troca a mídia
// por um quadro "vídeo em breve", para a página não ficar com um buraco.
// O quadro não mostra o nome do sinal, senão entregaria a resposta no quiz.
function htmlDoSinal(sinal) {
    var seFaltar = `this.outerHTML = '<div class=&quot;sinal-faltando&quot;>Vídeo<small>em breve</small></div>'`;

    if (sinal.tipo == "video") {
        return `<video src="${sinal.arquivo}" autoplay loop muted playsinline aria-label="Sinal ${sinal.nome} em Libras" onerror="${seFaltar}"></video>`;
    }
    return `<img src="${sinal.arquivo}" alt="Sinal ${sinal.nome} em Libras" onerror="${seFaltar}">`;
}
