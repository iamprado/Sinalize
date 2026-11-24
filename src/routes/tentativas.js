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

// Salva uma rodada do quiz (a tentativa e cada resposta dela)
router.post("/registrar", function (req, res) {
    tentativaController.registrar(req, res);
});

module.exports = router;
