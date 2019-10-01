const institutionRepository = require("../../infrastructure/instituicao/instituicaoRepository");
const {ResultadoVazioException} = require("../../utils/Exceptions");

module.exports = {
    salvarInstituicao: function (instituicao) {
        return new Promise((resolve, reject) => {
            institutionRepository.salvarInstituicao(instituicao)
                .then(instituicao => {
                    resolve(instituicao);
                }).catch(err => {
                    console.error(err);
                    reject(err);
            });
        });
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
