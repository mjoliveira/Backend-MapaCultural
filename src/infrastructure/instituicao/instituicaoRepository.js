const { Instituicao } = require('../../models');

module.exports = {
    salvarInstituicao: function (instutition) {
        return Instituicao.create(instutition);
    },

    buscarInstituicoes: function(){
        return Instituicao.findAll();
    }
};
