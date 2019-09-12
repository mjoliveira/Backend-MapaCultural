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

module.exports = {
    ResultadoVazioException
};