const institutionRepository = require("../../infrastructure/instituicao/institutionRepository");

module.exports = {
    salvarInstituicao: function (institution) {
        return institutionRepository.salvarInstituicao(institution);
    },

    buscarInstituicoes: function () {
        return institutionRepository.buscarInstituicoes();
    }
};
