const { Instituicao } = require('../../models');

module.exports = {
    salvarInstituicao: function (instutition) {
        return new Promise((resolve, reject) => {
            Instituicao.create(instutition).then(instutition => {
                resolve(instutition);
            }).catch(err => {
                reject(err);
            });
        });
    },

    buscarInstituicoes: function(){
        return new Promise((resolve, reject) => {
            Instituicao.findAll().then(instituicao => {
                console.log(instituicao);
                resolve(instituicao);
            }).catch(err => {
                console.log(err);
                reject(err);
            });
        });
    }
};
