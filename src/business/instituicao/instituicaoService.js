const institutionRepository = require("../../infrastructure/instituicao/instituicaoRepository");
const { ResultadoVazioException } = require("../../utils/Exceptions");

module.exports = {
    salvarInstituicao: function (institution) {
        return institutionRepository.salvarInstituicao(institution);
    },

    buscarInstituicoes: function () {
        return new Promise((resolve, reject) => {
            institutionRepository.buscarInstituicoes()
                .then(result => {
                    resolve(result)
                })
                .catch(err => {
                    reject(err)
                });
        })
    }
};
