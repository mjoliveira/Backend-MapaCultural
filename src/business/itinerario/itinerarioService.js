const itinerarioRepository = require("../../infrastructure/itinerario/itinerarioRepository");
const itinerarioValidator = require("./itinerarioValidador");
const {ResultadoVazioException} = require("../../utils/Exceptions");

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

    atualizarItinerario: function (id, itinerario) {
        return new Promise(((resolve, reject) => {
            itinerarioRepository.atualizarInstituicao(id, itinerario)
                .then(() => {
                    resolve();
                }).catch(err => {
                reject(err);
            });
        }));
    },
};