# Teste Dev Front End CredPago

Solução do teste da empresa CredPago para a vaga de desenvolvedor Fron End.

---

### Setup

-Dentro da pasta server, inicie o Json-Server na porta 8000, caso utilize outra porta é necessário realizar mudanças nas rotas da API na pasta client/src/api/callApi.js   

```shell
$ json-server --watch db.json --port 8000
```

-Dentro da pasta client, instale as dependências do package.json e inicie o app.  

> Com yarn

```shell
$ yarn add
$ yarn start
```

> Com npm

```shell
$ yarn add
$ yarn start
```

## Aplicação

A aplicação possui 3 rotas:
- '/' para a Home
- '/login' para a Login
- '/cadastro' para a Cadastro

A tabela presente na tela Home é totalmente funcional realizando todas as demandas CRUD se comunicando com a REST API do JSON Server.
Todos os formulários possuem um sistema de validação.
