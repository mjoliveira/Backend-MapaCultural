const institutionRepository = require("../../infrastructure/instituicao/instituicaoRepository");

module.exports = {
    salvarInstituicao: function (institution) {
        return institutionRepository.salvarInstituicao(institution);
    },

    buscarInstituicoes: function () {
        return institutionRepository.buscarInstituicoes();
    }
};
