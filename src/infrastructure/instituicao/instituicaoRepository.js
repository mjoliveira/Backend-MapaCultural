const { Instituicao } = require('../../models');
const { Horario } = require('../../models');

module.exports = {
    salvarInstituicao: function (instutition) {
        return Instituicao.create(instutition);
    },

    buscarInstituicoes: function(){
        return Instituicao.findAll();
    },

    buscarInstituicaoPorID: function (id) {
        return Instituicao.findOne({
            where: {
                id: id
            },
            include: [{
                model: Horario
            }]
        });
    }
};
