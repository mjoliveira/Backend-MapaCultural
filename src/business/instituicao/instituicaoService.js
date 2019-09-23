const institutionRepository = require("../../infrastructure/instituicao/instituicaoRepository");
const {ResultadoVazioException} = require("../../utils/Exceptions");

module.exports = {
    salvarInstituicao: function (institution) {
        return institutionRepository.salvarInstituicao(institution);
    },

    buscarInstituicoes: function () {
        return institutionRepository.buscarInstituicoes()
            .then(result => {
                if (result.length < 1) {
                    throw new ResultadoVazioException('instituicao', result);
                }
                return result;
            })
            .catch(err => {
                throw err;
            });
    }
};
