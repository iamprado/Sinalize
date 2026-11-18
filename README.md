<div align="center">

<img src="public/assets/imgs/Sinalize-Banner.png" alt="banner do Sinalize" width="50%">

**Libras na minha vida**

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-2563EB?style=for-the-badge&labelColor=3D4A6B)
![SPTech](https://img.shields.io/badge/SPTech-projeto%20individual-2563EB?style=for-the-badge&labelColor=3D4A6B)

![HTML5](https://img.shields.io/badge/HTML5-1D5BF0?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1D5BF0?style=for-the-badge&logo=css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-1D5BF0?style=for-the-badge&logo=javascript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-1D5BF0?style=for-the-badge&logo=nodedotjs&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-1D5BF0?style=for-the-badge&logo=mysql&logoColor=white)

**[Sobre](#-sobre)** · **[Funcionalidades](#-funcionalidades)** · **[Tecnologias](#-tecnologias)** · **[Como rodar](#-como-rodar)** · **[Autor](#-autor)**

</div>

---

## 🤟 Sobre

O **Sinalize** é um site sobre a **Libras (Língua Brasileira de Sinais)** e sobre a minha história como **CODA** (*Child of Deaf Adults*), filho ouvinte de pais surdos. Foi desenvolvido como **Projeto Individual** na **SPTech — São Paulo Tech School**.

> ✍️ **Escreva aqui sua história:** como a Libras faz parte da sua vida, o que é crescer entre o mundo surdo e o ouvinte, e o que você quer que quem visita o site entenda.

---

## 🧩 Funcionalidades

| | Tela | O que tem | Status |
|:-:|---|---|:-:|
| 🏠 | **Home** | Minha história, o que é Libras, cultura surda e a Lei 10.436/2002 | ⚪ Planejado |
| ✋ | **Aprenda** | Alfabeto manual e sinais básicos (cumprimentos, família, números) | ⚪ Planejado |
| 📝 | **Cadastro** | Nome, e-mail, senha, nível de Libras e se conhece alguma pessoa surda | ⚪ Planejado |
| 🔐 | **Login** | Acesso com e-mail e senha cadastrados | ⚪ Planejado |
| ❓ | **Quiz** | "Quanto você sabe de Libras?": identificar o significado de sinais | ⚪ Planejado |
| 📊 | **Dashboard** | Média de acertos, % de usuários sem contato com Libras, sinal mais errado e evolução | ⚪ Planejado |

---

## 🛠️ Tecnologias

- **Front-end:** HTML, CSS e JavaScript
- **Back-end:** Node.js + Express (API [web-data-viz](https://github.com/BandTec/web-data-viz), da SPTech)
- **Banco de dados:** MySQL, rodando em uma VM Linux
- **Gráficos:** Chart.js
- **Organização:** Git, GitHub e Trello

---

## 🚀 Como rodar

1. Clone este repositório:

```
git clone https://github.com/iamprado/Sinalize.git
```

2. Crie as tabelas no banco de dados executando o script **/src/database/script-tabelas.sql**.

3. No arquivo **app.js**, escolha o ambiente:
   - Produção (remoto): deixe habilitada a linha `var ambiente_processo = 'producao';`
   - Desenvolvimento (local): deixe habilitada a linha `var ambiente_processo = 'desenvolvimento';`

4. Coloque as credenciais do banco no arquivo **.env** ou **.env.dev**.

5. Instale as dependências e inicie o projeto:

```
npm i
npm start
```

6. Acesse no navegador o endereço informado no terminal. Para parar, tecle **CTRL+C**.

---

## 👤 Autor

<a href="https://github.com/iamprado">
  <img src="https://github.com/iamprado.png" width="100" alt="Foto de perfil de Thiago Prado">
</a>

### Thiago Prado

[![GitHub](https://img.shields.io/badge/@iamprado-1D5BF0?style=for-the-badge&logo=github&logoColor=white)](https://github.com/iamprado)
