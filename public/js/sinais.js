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

// Informações de cada tema: o nome que aparece na tela, o vetor de sinais
// e como chamar cada item ("letra" no alfabeto, "número" nos números, "sinal" no resto).
// A chave (alfabeto, numeros...) é o valor que vai no endereço: quiz.html?tema=numeros
var temas = {
    alfabeto: { titulo: "Alfabeto", sinais: alfabeto, item: "letra", itens: "letras" }
};

// Procura um sinal pelo nome (ex.: "N" ou "Bom dia") em todos os temas e devolve o objeto dele
function buscarSinal(nome) {
    var listaDeTemas = [alfabeto];

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
