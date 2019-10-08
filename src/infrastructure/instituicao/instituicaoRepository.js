const { Instituicao, Horario, Rede, Imagem } = require('../../models');

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
            },{
                model: Rede
            },{
                model: Imagem
            }]
        });
    }
};
