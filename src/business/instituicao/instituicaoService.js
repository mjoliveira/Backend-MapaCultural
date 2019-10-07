const instituicaoRepository = require("../../infrastructure/instituicao/instituicaoRepository");
const {ResultadoVazioException, BussinessException} = require("../../utils/Exceptions");
const instituicaoValidator = require("./instituicaoValidator");

module.exports = {
    salvarInstituicao: function (instituicao) {
        return new Promise((resolve, reject) => {
            try {
                instituicaoValidator.validarInstituicao(instituicao);
            } catch (err) {
                reject(err);
            }
            instituicaoRepository.salvarInstituicao(instituicao)
                .then(instituicao => {
                    resolve(instituicao);
                }).catch(err => {
                console.error(err);
                reject(new BussinessException('instituicao', instituicao));
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
                console.error(err);
                reject(new BussinessException('instituicao', instituicao));
            });
        }));
    },

    atualizarInstituicaoHorarios: function (id, horarios) {
        return new Promise(((resolve, reject) => {
            try {
                horarios
                    .forEach(horario => instituicaoValidator.validarDia(horario));
            } catch (err) {
                reject(err);
            }
            instituicaoRepository.atualizarInstituicaoHorarios(id, horarios)
                .then(() => {
                    resolve();
                }).catch(err => {
                console.error(err);
                reject(new BussinessException('instituicao', horarios));
            });
        }));
    },

    atualizarInstituicaoRedes: function (id, redes) {
        return new Promise(((resolve, reject) => {
            instituicaoRepository.atualizarInstituicaoRedes(id, redes)
                .then(() => {
                    resolve();
                }).catch(err => {
                console.error(err);
                reject(new BussinessException('instituicao', redes));
            });
        }));
    },

    atualizarInstituicaoImagens: function (id, imagens) {
        return new Promise(((resolve, reject) => {
            instituicaoRepository.atualizarInstituicaoImagens(id, imagens)
                .then(() => {
                    resolve();
                }).catch(err => {
                console.error(err);
                reject(new BussinessException('instituicao', imagens));
            });
        }));
    }
};