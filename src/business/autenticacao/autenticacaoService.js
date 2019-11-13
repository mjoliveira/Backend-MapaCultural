const autenticacaoRepository = require("../../infrastructure/autenticacao/autenticacaoRepository");

module.exports = {

    login: function (usuario) {
        return new Promise((resolve, reject) => {
            autenticacaoRepository.login(usuario)
                .then((resultado) => {
                    if (resultado.senha === usuario.senha) {

                        usuario.token = this.gerarToken();
                        usuario.validadeToken = this.gerarValidadeToken();

                        autenticacaoRepository.atualizarUsuario(usuario)
                            .then(() => {
                                resolve({
                                    "token": usuario.token,
                                    "validade": usuario.validadeToken
                                });
                            }).catch((err) => {
                                reject(err);
                        });
                    }
                    resolve(resultado);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },

    gerarToken: function () {
        return Math.random().toString(36).substring(24);
    },

    gerarValidadeToken: function () {
        var validade = new Date();
        validade.setHours(validade.getHours() + 24);

        return validade;
    }
};