const {Admin} = require('../../models');

module.exports = {

    login: function (usuario) {
        return new Promise((resolve, reject) => {
            Admin.findOne({
                where: {
                    login: usuario.login
                }
            }).then((resultado) => {
                resolve(resultado);
            }).catch((err) => {
                reject(err);
            });
        });
    },

    atualizarUsuario: function (usuario) {
        return new Promise((resolve, reject) => {
            Admin.update(usuario, {
                where: {id: usuario.id}
            }).then((resultado) => {
               resolve(resultado);
            }).catch((err) => {
                reject(err);
            });
        });
    }
};