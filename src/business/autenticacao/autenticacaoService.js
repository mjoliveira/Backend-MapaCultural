const autenticacaoRepository = require("../../infrastructure/autenticacao/autenticacaoRepository");

module.exports = {

    login: function (usuario) {
        return new Promise((resolve, reject) => {
            autenticacaoRepository.login(usuario)
                .then((resultado) => {
                    //Verificar se as senhas batem
                    resolve(resultado);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    }
};