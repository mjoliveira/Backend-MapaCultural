const {Instituicao, Horario} = require('../../models');

module.exports = {
    salvarInstituicao: function (instituicao) {
        console.log(JSON.stringify(instituicao));
        return Instituicao.create({
            nome : instituicao.nome,
            endereco: instituicao.endereco,
            tempoVisita: instituicao.tempoVisita,
            descricao: instituicao.descricao,
            latitude: instituicao.latitude,
            longitude: instituicao.longitude,
            telefone: instituicao.telefone,
            observacoes: instituicao.observacoes,
            horarios: instituicao.horarios
        }, {
            include: [{
                model: Horario,
                as: "horarios"
            }]
        });
    },

    buscarInstituicoes: function () {
        return new Promise((resolve, reject) => {
            Instituicao.findAll().then(instituicao => {
                resolve(instituicao);
            }).catch(err => {
                console.log(err);
                reject(err);
            });
        });
    }
};
