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

function registrar(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var tema = req.body.temaServer;
    var modo = req.body.modoServer;
    var acertos = req.body.acertosServer;
    var total = req.body.totalServer;
    var respostas = req.body.respostasServer;   // vetor: [{ sinal: "A", acertou: true }, ...]

    if (idUsuario == undefined) {
        res.status(400).send("O id do usuário está undefined!");
    } else if (tema == undefined || modo == undefined) {
        res.status(400).send("O tema ou o modo está undefined!");
    } else if (acertos == undefined || total == undefined) {
        res.status(400).send("Os acertos ou o total estão undefined!");
    } else if (respostas == undefined || respostas.length == 0) {
        res.status(400).send("As respostas estão vazias!");
    } else {
        // 1º grava a tentativa; o banco devolve o id que ela recebeu (insertId)
        tentativaModel.registrarTentativa(idUsuario, tema, modo, acertos, total)
            .then(function (resultadoTentativa) {
                var idTentativa = resultadoTentativa.insertId;

                // 2º grava as respostas ligadas a essa tentativa
                return tentativaModel.registrarRespostas(idTentativa, respostas);
            })
            .then(function () {
                res.status(201).send("Tentativa salva!");
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("Houve um erro ao salvar a tentativa: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function mediaPorTema(req, res) {
    var idUsuario = req.params.idUsuario;

    tentativaModel.mediaPorTema(idUsuario)
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar a média por tema: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function sinaisMaisErrados(req, res) {
    var idUsuario = req.params.idUsuario;

    tentativaModel.sinaisMaisErrados(idUsuario)
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os sinais mais errados: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    listarPorUsuario,
    listarErrosUltima,
    registrar,
    mediaPorTema,
    sinaisMaisErrados
};
