var express = require("express");
var router = express.Router();

var tentativaController = require("../controllers/tentativaController");

// Lista todas as tentativas do usuário (usado na Home logada: progresso e ofensiva)
router.get("/usuario/:idUsuario", function (req, res) {
    tentativaController.listarPorUsuario(req, res);
});

// Lista os sinais que o usuário errou na última tentativa (as "letras para revisar")
router.get("/usuario/:idUsuario/erros", function (req, res) {
    tentativaController.listarErrosUltima(req, res);
});

// Dashboard: média de acertos do usuário em cada tema
router.get("/usuario/:idUsuario/media-por-tema", function (req, res) {
    tentativaController.mediaPorTema(req, res);
});

// Dashboard: os 5 sinais que o usuário mais errou em todas as tentativas
router.get("/usuario/:idUsuario/mais-errados", function (req, res) {
    tentativaController.sinaisMaisErrados(req, res);
});

// Salva uma rodada do quiz (a tentativa e cada resposta dela)
router.post("/registrar", function (req, res) {
    tentativaController.registrar(req, res);
});

module.exports = router;
