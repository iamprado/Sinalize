var tentativaModel = require("../models/tentativaModel");

function listarPorUsuario(req, res) {
    var idUsuario = req.params.idUsuario;

    tentativaModel.listarPorUsuario(idUsuario)
        .then(function (resultado) {
            // Mesmo sem tentativas, devolve a lista vazia: a Home mostra o "primeiro acesso"
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar as tentativas: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function listarErrosUltima(req, res) {
    var idUsuario = req.params.idUsuario;

    tentativaModel.listarErrosUltima(idUsuario)
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os erros da última tentativa: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    listarPorUsuario,
    listarErrosUltima
};
