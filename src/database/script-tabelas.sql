-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE sinalize;

USE sinalize;

CREATE TABLE empresa (
	id INT PRIMARY KEY AUTO_INCREMENT,
	razao_social VARCHAR(50),
	cnpj CHAR(14),
	codigo_ativacao VARCHAR(50)
);

-- nivel_libras guarda a resposta do cadastro: nunca, basico, intermediario ou fluente
CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL,
	email VARCHAR(80) NOT NULL UNIQUE,
	senha VARCHAR(50) NOT NULL,
	nivel_libras VARCHAR(20) NOT NULL,
	CONSTRAINT chk_nivel CHECK (nivel_libras IN ('nunca', 'basico', 'intermediario', 'fluente'))
);

-- Uma tentativa é uma rodada do quiz. Um usuário tem várias tentativas (1:N).
-- modo: "sinal" (vê o sinal e escolhe a letra) ou "invertido" (vê a letra e escolhe o sinal)
CREATE TABLE tentativa (
	id INT PRIMARY KEY AUTO_INCREMENT,
	fk_usuario INT NOT NULL,
	tema VARCHAR(20) NOT NULL,
	modo VARCHAR(20) NOT NULL,
	acertos INT NOT NULL,
	total_perguntas INT NOT NULL,
	data_hora DATETIME DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

-- Cada resposta é uma pergunta de uma tentativa. Uma tentativa tem várias respostas (1:N).
-- acertou: 1 = acertou, 0 = errou. Daqui saem as "letras para revisar" e o "sinal mais errado".
CREATE TABLE resposta (
	id INT PRIMARY KEY AUTO_INCREMENT,
	fk_tentativa INT NOT NULL,
	sinal VARCHAR(20) NOT NULL,
	acertou TINYINT NOT NULL,
	FOREIGN KEY (fk_tentativa) REFERENCES tentativa(id)
);

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

create table aquario (
/* em nossa regra de negócio, um aquario tem apenas um sensor */
	id INT PRIMARY KEY AUTO_INCREMENT,
	descricao VARCHAR(300),
	fk_empresa INT,
	FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);

/* esta tabela deve estar de acordo com o que está em INSERT de sua API do arduino - dat-acqu-ino */

create table medida (
	id INT PRIMARY KEY AUTO_INCREMENT,
	temperatura DECIMAL,
	momento DATETIME,
	fk_aquario INT,
	FOREIGN KEY (fk_aquario) REFERENCES aquario(id)
);

insert into empresa (razao_social, codigo_ativacao) values ('Empresa 1', 'ED145B');
insert into empresa (razao_social, codigo_ativacao) values ('Empresa 2', 'A1B2C3');
insert into aquario (descricao, fk_empresa) values ('Aquário de Estrela-do-mar', 1);
insert into aquario (descricao, fk_empresa) values ('Aquário de Peixe-dourado', 2);