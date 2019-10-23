const instituicaoRepository = require("../../infrastructure/instituicao/instituicaoRepository");
const { ResultadoVazioException, BussinessException } = require("../../utils/Exceptions");
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

                    var listaInstituicoes = []

                    //Percorrendo lista retornado pelo banco
                    for (let i = 0; i < instituticoes.length; i++) {
                        //Verificação de horário para instituição da lista
                        var aberto = false

                        for (let j = 0; j < instituticoes[i].horarios.length; j++) {
                            var objetoHorario = instituticoes[i].horarios[j];

                            //Verifica se é o mesmo dia
                            if (this.getDiaAtual() == objetoHorario.dia) {
                                //Verifica se existe algum intervalo correspondente
                                if (this.temHorarioCorrespondente(objetoHorario)) {
                                    aberto = true
                                }
                            }
                        }

                        // Adiciona instuição formatada
                        listaInstituicoes.push({
                            id: instituticoes[i].id,
                            latitude: instituticoes[i].latitude,
                            longitude: instituticoes[i].longitude,
                            nome: instituticoes[i].nome,
                            endereco: instituticoes[i].endereco,
                            aberto: aberto
                        })
                    }

                    resolve(listaInstituicoes)
                })
                .catch(err => {
                    if (err.name === 'ResultadoVazioException') {
                        reject(err);
                    } else {
                        reject(new BussinessException('instituicao', err));
                    }
                });
        })
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

    getDiaAtual: function () {
        var dataAtual = new Date()

        switch (dataAtual.getDay()) {
            case 0: return "dom"
            case 1: return "seg"
            case 2: return "ter"
            case 3: return "qua"
            case 4: return "qui"
            case 5: return "sex"
            case 6: return "sab"
        }
    },

    temHorarioCorrespondente: function (horario) {
        var horarioInicial = horario.horaAbertura;
        var horarioFinal = horario.horaFechamento;

        dataAtual = new Date()

        dataInicial = new Date(dataAtual.getTime());
        dataInicial.setHours(horarioInicial.split(":")[0]);
        dataInicial.setMinutes(horarioInicial.split(":")[1]);
        dataInicial.setSeconds(horarioInicial.split(":")[2]);

        dataFinal = new Date(dataAtual.getTime());
        dataFinal.setHours(horarioFinal.split(":")[0]);
        dataFinal.setMinutes(horarioFinal.split(":")[1]);
        dataFinal.setSeconds(horarioFinal.split(":")[2]);

        return dataInicial < dataAtual && dataFinal > dataAtual
    }
};
