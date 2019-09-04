const { Instituicao } = require('../../models');

module.exports = {
    saveInstitution: function (instutition) {
        return new Promise((resolve, reject) => {
            Instituicao.create(instutition).then(instutition => {
                resolve(instutition);
            }).catch(err => {
                reject(err);
            })
        });
    }
}
