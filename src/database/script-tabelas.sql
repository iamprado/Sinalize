-- =====================================================================
-- SINALIZE - script do banco de dados (MySQL)
-- Rode este arquivo inteiro no MySQL Workbench (ou na VM Linux).
-- Ele apaga o banco antigo e cria tudo do zero, então pode ser rodado
-- quantas vezes for preciso.
--
-- Modelo:  usuario 1 ──── N tentativa 1 ──── N resposta
--   usuario   = quem tem conta no site
--   tentativa = uma rodada do quiz (10 perguntas de um tema)
--   resposta  = cada pergunta respondida dentro de uma rodada
-- =====================================================================


-- =====================================================================
-- 1. CRIAÇÃO DO BANCO E DAS TABELAS
-- =====================================================================

DROP DATABASE IF EXISTS sinalize;
CREATE DATABASE sinalize;
USE sinalize;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL,
	email VARCHAR(80) NOT NULL UNIQUE,   -- UNIQUE: não deixa duas contas com o mesmo e-mail
	senha VARCHAR(50) NOT NULL
);

-- Um usuário tem várias tentativas (1:N): a FK fica do lado N.
-- tema: alfabeto, numeros, cumprimentos, familia, cores ou sentimentos
-- modo: "sinal" (vê o sinal e escolhe o significado) ou "invertido" (vê o significado e escolhe o sinal)
CREATE TABLE tentativa (
	id INT PRIMARY KEY AUTO_INCREMENT,
	fk_usuario INT NOT NULL,
	tema VARCHAR(20) NOT NULL,
	modo VARCHAR(20) NOT NULL,
	acertos INT NOT NULL,
	total_perguntas INT NOT NULL,
	data_hora DATETIME DEFAULT CURRENT_TIMESTAMP,   -- o banco preenche sozinho com a hora do INSERT
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

-- Uma tentativa tem várias respostas (1:N).
-- acertou: 1 = acertou, 0 = errou
CREATE TABLE resposta (
	id INT PRIMARY KEY AUTO_INCREMENT,
	fk_tentativa INT NOT NULL,
	sinal VARCHAR(20) NOT NULL,
	acertou TINYINT NOT NULL,
	FOREIGN KEY (fk_tentativa) REFERENCES tentativa(id)
);


-- =====================================================================
-- 2. DADOS DE EXEMPLO (para demonstrar as consultas sem jogar na hora)
--    As datas usam NOW() - INTERVAL, então a ofensiva sempre aparece
--    "atual", não importa o dia em que o script for rodado.
-- =====================================================================

INSERT INTO usuario (nome, email, senha) VALUES
	('Ana Souza', 'ana@email.com', '123456'),
	('Bruno Lima', 'bruno@email.com', '123456');

-- Ana (id 1): 3 tentativas, de 4 para 8 acertos. Bruno (id 2): 1 tentativa.
INSERT INTO tentativa (fk_usuario, tema, modo, acertos, total_perguntas, data_hora) VALUES
	(1, 'alfabeto', 'sinal', 4, 10, NOW() - INTERVAL 3 DAY),
	(1, 'alfabeto', 'invertido', 6, 10, NOW() - INTERVAL 2 DAY),
	(1, 'alfabeto', 'sinal', 8, 10, NOW() - INTERVAL 1 DAY),
	(2, 'alfabeto', 'sinal', 5, 10, NOW());

-- Tentativa 1 da Ana: 4 acertos (A, C, F, R)
INSERT INTO resposta (fk_tentativa, sinal, acertou) VALUES
	(1, 'A', 1), (1, 'B', 0), (1, 'C', 1), (1, 'D', 0), (1, 'E', 0),
	(1, 'F', 1), (1, 'N', 0), (1, 'Q', 0), (1, 'R', 1), (1, 'Z', 0);

-- Tentativa 2 da Ana: 6 acertos (errou E, N, Q, Z)
INSERT INTO resposta (fk_tentativa, sinal, acertou) VALUES
	(2, 'A', 1), (2, 'E', 0), (2, 'G', 1), (2, 'I', 1), (2, 'L', 1),
	(2, 'N', 0), (2, 'O', 1), (2, 'Q', 0), (2, 'S', 1), (2, 'Z', 0);

-- Tentativa 3 da Ana: 8 acertos (errou N e Z)
INSERT INTO resposta (fk_tentativa, sinal, acertou) VALUES
	(3, 'B', 1), (3, 'D', 1), (3, 'E', 1), (3, 'H', 1), (3, 'M', 1),
	(3, 'N', 0), (3, 'P', 1), (3, 'T', 1), (3, 'U', 1), (3, 'Z', 0);

-- Tentativa do Bruno: 5 acertos
INSERT INTO resposta (fk_tentativa, sinal, acertou) VALUES
	(4, 'A', 1), (4, 'B', 1), (4, 'C', 0), (4, 'D', 1), (4, 'F', 0),
	(4, 'K', 1), (4, 'N', 0), (4, 'Q', 0), (4, 'V', 1), (4, 'X', 0);


-- =====================================================================
-- 3. CONSULTAS QUE O SITE USA
--    São as mesmas dos models da API (src/models). Aqui usam o usuário 1
--    (Ana) para dar para rodar uma por uma e ver o resultado.
-- =====================================================================

-- Login (usuarioModel.autenticar): procura o e-mail e a senha
SELECT id, nome, email
  FROM usuario
 WHERE email = 'ana@email.com' AND senha = '123456';

-- Progresso e ofensiva (tentativaModel.listarPorUsuario):
-- tentativas da mais antiga para a mais nova, com o dia sem a hora
SELECT id, tema, modo, acertos, total_perguntas,
       DATE_FORMAT(data_hora, '%Y-%m-%d') AS dia
  FROM tentativa
 WHERE fk_usuario = 1
 ORDER BY data_hora;

-- Letras para revisar (tentativaModel.listarErrosUltima):
-- a subconsulta acha a última tentativa; a consulta de fora pega os erros dela
SELECT sinal
  FROM resposta
 WHERE acertou = 0
   AND fk_tentativa = (SELECT MAX(id) FROM tentativa WHERE fk_usuario = 1);

-- Dashboard - média por tema (tentativaModel.mediaPorTema): AVG + GROUP BY
SELECT tema,
       ROUND(AVG(acertos / total_perguntas) * 100) AS media
  FROM tentativa
 WHERE fk_usuario = 1
 GROUP BY tema;

-- Dashboard - sinais mais errados (tentativaModel.sinaisMaisErrados):
-- JOIN porque a resposta não guarda o usuário, só a tentativa
SELECT r.sinal, COUNT(*) AS erros
  FROM resposta r
  JOIN tentativa t ON r.fk_tentativa = t.id
 WHERE t.fk_usuario = 1
   AND r.acertou = 0
 GROUP BY r.sinal
 ORDER BY erros DESC
 LIMIT 5;

-- Conferência geral: cada tentativa com o nome de quem jogou (JOIN entre as 3 tabelas)
SELECT u.nome, t.id AS tentativa, t.tema, t.modo, t.acertos,
       COUNT(r.id) AS respostas_salvas
  FROM usuario u
  JOIN tentativa t ON t.fk_usuario = u.id
  JOIN resposta r ON r.fk_tentativa = t.id
 GROUP BY u.nome, t.id, t.tema, t.modo, t.acertos
 ORDER BY t.id;
