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
                reject(new BussinessException('instituicao', err));
            });
        });
    },

    buscarInstituicaoPorID: function (id) {
        return new Promise((resolve, reject) => {
            instituicaoRepository.buscarInstituicaoPorID(id).then(instituicao => { //To com dúvida se isso fica ou não, pois retorna apenas um elemento. (Fica sim, e não precisa salvar em variavel)
                if (instituicao == null) {
                    throw new ResultadoVazioException('instituicao', instituicao);
                }
                resolve(instituicao);
            }).catch(err => {
                if (err.name === 'ResultadoVazioException') {
                    reject(err);
                } else {
                    reject(new BussinessException('instituicao', err));
                }
            });
        });
    },

    buscarInstituicoes: function () {
        return new Promise((resolve, reject) => {
            instituicaoRepository.buscarInstituicoes().then(instituticoes => {
                if (instituticoes.length < 1) {
                    throw new ResultadoVazioException('instituicao', instituticoes);
                }
                resolve(instituticoes);
            }).catch(err => {
                if (err.name === 'ResultadoVazioException') {
                    reject(err);
                } else {
                    reject(new BussinessException('instituicao', err));
                }
            });
        });
    },

    atualizarInstituicao: function (id, instituicao) {
        return new Promise(((resolve, reject) => {
            instituicaoRepository.atualizarInstituicao(id, instituicao)
                .then(() => {
                    resolve();
                }).catch(err => {
                reject(new BussinessException('instituicao', err));
            });
        }));
    },

    atualizarInstituicaoHorarios: function (id, horarios) {
        return new Promise(((resolve, reject) => {
            try {
                horarios.forEach(horario => instituicaoValidator.validarDia(horario));
            } catch (err) {
                reject(err);
            }
            instituicaoRepository.atualizarInstituicaoHorarios(id, horarios)
                .then(() => {
                    resolve();
                }).catch(err => {
                reject(new BussinessException('instituicao', err));
            });
        }));
    },

    atualizarInstituicaoRedes: function (id, redes) {
        return new Promise(((resolve, reject) => {
            instituicaoRepository.atualizarInstituicaoRedes(id, redes)
                .then(() => {
                    resolve();
                }).catch(err => {
                reject(new BussinessException('instituicao', err));
            });
        }));
    },

    atualizarInstituicaoImagens: function (id, imagens) {
        return new Promise(((resolve, reject) => {
            instituicaoRepository.atualizarInstituicaoImagens(id, imagens)
                .then(() => {
                    resolve();
                }).catch(err => {
                reject(new BussinessException('instituicao', err));
            });
        }));
    },
};