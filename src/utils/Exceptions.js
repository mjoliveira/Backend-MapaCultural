'use strict';

class ResultadoVazioException extends Error{
    constructor(nome, objeto) {
        super(`Não foi encontrado nenhum valor de ${nome}`);
        this.name = this.constructor.name;
        this.data = objeto;
        this.statusCode = 404;
        Error.captureStackTrace(this, this.constructor);
    }
}

class BussinessException extends Error{
    constructor(nome, objeto) {
        super(`Erro interno no servico ${nome}`);
        this.name = this.constructor.name;
        this.data = objeto;
        this.statusCode = 503;
        Error.captureStackTrace(this, this.constructor);
    }
}

class ValidacaoException extends Error{
    constructor(nome, objetoErro) {
        super(`Erro ao validar ${nome}`);
        this.name = this.constructor.name;
        this.data = objetoErro;
        this.statusCode = 400;
        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = {
    ResultadoVazioException,
    BussinessException,
    ValidacaoException
};