// essa aqui é uma sintaxe antiga do commonJS
const express = require('express');
const routes = require('./routes.js');

class App {
    // o metodo constructor é chamado automaticamente quando instanciamos a classe
    constructor() {
        // aqui o server vai receber o express e usamos o server daqui em diante
        this.server = express();

        this.middlewares();
        this.routes();
    }

    // vou cadastrar todos middlewares da aplicacao aqui com o use
    middlewares() {
        // a partir deste momento a nossa aplicacao pode receber requisicoes em formato json
        this.server.use(express.json());
    }

    // aqui vai estar a chamada de todas rotas da aplicacao
    routes() {
        // estou dizendo para ser usada as rotas que estao oriundas do arquivo routes.js
        this.server.use(routes);
    }
}

// só o server faz sentido exportar, as demais ficam privadas
module.exports = new App().server;

