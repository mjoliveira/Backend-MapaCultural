const itinerarioRepository = require("../../infrastructure/itinerario/itinerarioRepository");
const itinerarioValidator = require("./itinerarioValidador");
const {ResultadoVazioException } = require("../../utils/Exceptions");


module.exports = {
    salvarItinerario: function (itinerario) {
        return new Promise((resolve, reject) => {
            try {
                itinerarioValidator.validarInstitiucoes(itinerario);
            } catch (err) {
                reject(err);
            }

            itinerarioRepository.salvarItinerario(itinerario)
                .then(() => {
                    resolve(itinerario);
                }).catch(err => {
                    reject(err);
            });
        });
    },

    buscarItinerarios: function () {
        return new Promise((resolve, reject) => {
                itinerarioRepository.buscarItinerarios().then(itinerarios => {
                    if (itinerarios.length < 1) {
                        throw new ResultadoVazioException('itinerario', itinerarios);
                    }
                    resolve(itinerarios);
                }).catch(err => {
                    reject(err);
                });
            }
        );
    },

    deletar: function(id) {
        console.log("Teste - Service. ID: " + id);
        return new Promise((resolve, reject) => {
            itinerarioRepository.deletar(id)
                .then((itinerario) => {
                    if (itinerario === 0) {
                        throw new ResultadoVazioException('itinerario', id);
                    }
                    resolve();
                })
                .catch(err => {
                    reject(err);
                });
        });
    },

    atualizarItinerario: function (id, itinerario) {
        return new Promise(((resolve, reject) => {
            itinerarioRepository.atualizarItinerario(id, itinerario)
                .then(() => {
                    if(itinerario == null){
                        throw new ResultadoVazioException('itinerario', itinerario);
                    }
                    resolve(itinerario);
                }).catch(err => {
                reject(err);
            });
        }));
    },
};