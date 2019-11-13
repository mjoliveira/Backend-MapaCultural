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
            instituicaoRepository.buscarInstituicaoPorID(id).then(instituicao => {
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

            instituicaoRepository.buscarInstituicoes()
                .then(instituticoes => {
                    if (instituticoes.length < 1) {
                        throw new ResultadoVazioException('instituicao', instituticoes);
                    }

                    let listaInstituicoes = [];

                    for (let i = 0; i < instituticoes.length; i++) {
                        let aberto = instituicaoValidator.validarInstituicaoAberta(instituticoes[i]);

                        listaInstituicoes.push({
                            id: instituticoes[i].id,
                            latitude: instituticoes[i].latitude,
                            longitude: instituticoes[i].longitude,
                            nome: instituticoes[i].nome,
                            endereco: instituticoes[i].endereco,
                            aberto: aberto
                        });
                    }
                    resolve(listaInstituicoes);
                })
                .catch(err => {
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
