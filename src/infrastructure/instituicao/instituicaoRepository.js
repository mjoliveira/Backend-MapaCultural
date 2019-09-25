const { Instituicao } = require('../../models');
const { Horario } = require('../../models');

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

    buscarInstituicoes: function () {
        return new Promise((resolve, reject) => {
            Instituicao.findAll({
                include: [
                    {
                        model: Horario
                    }
                ]
            }).then(instituicao => {
                resolve(instituicao);
            }).catch(err => {
                console.log(err);
                reject(err);
            });
        });
    }
};
