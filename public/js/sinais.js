// Vetor com todos os sinais do alfabeto gravados para o Sinalize.
// É usado na Home (letras para revisar), no quiz e no Aprenda.
// tipo "foto" vira <img> na página; tipo "video" vira <video> (letras com movimento).
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

// Procura um sinal pelo nome no vetor (ex.: "N") e devolve o objeto dele
function buscarSinal(nome) {
    for (var i = 0; i < alfabeto.length; i++) {
        if (alfabeto[i].nome == nome) {
            return alfabeto[i];
        }
    }
    return null;
}

// Monta o HTML da foto ou do vídeo de um sinal
function htmlDoSinal(sinal) {
    if (sinal.tipo == "video") {
        return `<video src="${sinal.arquivo}" autoplay loop muted playsinline aria-label="Sinal ${sinal.nome} em Libras"></video>`;
    }
    return `<img src="${sinal.arquivo}" alt="Sinal ${sinal.nome} em Libras">`;
}
