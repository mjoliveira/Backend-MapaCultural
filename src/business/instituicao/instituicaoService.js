const instituicaoRepository = require("../../infrastructure/instituicao/instituicaoRepository");
const {ResultadoVazioException} = require("../../utils/Exceptions");

module.exports = {
    salvarInstituicao: function (instituicao) {
        return new Promise((resolve, reject) => {
            instituicaoRepository.salvarInstituicao(instituicao)
                .then(instituicao => {
                    resolve(instituicao);
                }).catch(err => {
                    console.error(err);
                    reject(err);
            });
        });
    },

    buscarInstituicoes: function () {
        return instituicaoRepository.buscarInstituicoes()
            .then(result => {
                if (result.length < 1) {
                    throw new ResultadoVazioException('instituicao', result);
                }
                return result;
            })
            .catch(err => {
                throw err;
            });
    },

    atualizarInstituicao: function (id, instituicao) {
        return new Promise(((resolve, reject) => {
            instituicaoRepository.atualizarInstituicao(id, instituicao)
                .then(() => {
                    resolve();
                }).catch(err => {
                    reject(err);
            });
        }));
    },

    atualizarInstituicaoHorarios: function (id, horarios) {
        return new Promise(((resolve, reject) => {
            instituicaoRepository.atualizarInstituicaoHorarios(id, horarios)
                .then(() => {
                    resolve();
                }).catch(err => {
                reject(err);
            });
        }));
    }
};
