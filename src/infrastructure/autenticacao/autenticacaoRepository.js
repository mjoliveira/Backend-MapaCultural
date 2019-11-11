const { Admin } = require('../../models');

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
    }
};