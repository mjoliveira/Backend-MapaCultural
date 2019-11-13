const autenticacaoRepository = require("../../infrastructure/autenticacao/autenticacaoRepository");

module.exports = {

    login: function (usuario) {
        return new Promise((resolve, reject) => {
            autenticacaoRepository.login(usuario)
                .then((resultado) => {
                    if (resultado.senha === usuario.senha) {

                        usuario.token = this.gerarToken();
                        usuario.validadeToken = this.gerarValidadeToken();
                        usuario.id = resultado.id
                        usuario.nome = resultado.nome

                        autenticacaoRepository.atualizarUsuario(usuario)
                            .then(() => {
                                resolve({
                                    "token": usuario.token,
                                    "validade": usuario.validadeToken
                                });
                            }).catch((err) => {
                                reject(err);
                            });
                    } else {
                        reject("Usuário ou senha inválida")
                    }
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },

    gerarToken: function () {
        var resultado = "";
        var caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 24; i++) {
            resultado += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }
        return resultado;
    },

    gerarValidadeToken: function () {
        var validade = new Date();
        validade.setHours(validade.getHours() + 24);

        return validade;
    }
};