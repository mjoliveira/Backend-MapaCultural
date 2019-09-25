const institutionRepository = require("../../infrastructure/instituicao/instituicaoRepository");
const {ResultadoVazioException} = require("../../utils/Exceptions");

module.exports = {
    salvarInstituicao: function (institution) {
        return institutionRepository.salvarInstituicao(institution);
    },

    buscarInstituicoes: function () {
        return new Promise((resolve,reject) => {
            institutionRepository.buscarInstituicoes().then(instituticoes => {
                if (instituticoes.length < 1) {
                    throw new ResultadoVazioException('instituicao', instituticoes);
                }
                resolve(instituticoes);
            })
            .catch(err => {
                reject(err);
            });
        });
    },

    buscarInstituicaoPorID: function (id) {
        return new Promise((resolve,reject) => {
            const instituicao = institutionRepository.buscarInstituicaoPorID(id).then(instituicao => { //To com dúvida se isso fica ou não, pois retorna apenas um elemento.
                if (instituicao == null) {
                    throw new ResultadoVazioException('instituicao', instituicao);
                }
                resolve(instituicao);
            })
                .catch(err => {
                    reject(err);
                });
        });
    }
};
