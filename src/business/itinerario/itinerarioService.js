const itinerarioRepository = require("../../infrastructure/itinerario/itinerarioRepository");
const itinerarioValidator = require("./itinerarioValidador");
const {ResultadoVazioException, BussinessException} = require("../../utils/Exceptions");


module.exports = {
    salvarItinerario: function (itinerario) {
        return new Promise((resolve, reject) => {
            try {
                itinerarioValidator.validarInstitiucoes(itinerario);
            } catch (err) {
                reject(err);
            }
            itinerarioRepository.salvarItinerario(itinerario)
                .then(itinerario => {
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
        console.log(id + "<------ service");
        return new Promise((resolve, reject) => {
            itinerarioRepository.deletar(id)
                .then(itinerarios => {
                    resolve(itinerarios);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }
};