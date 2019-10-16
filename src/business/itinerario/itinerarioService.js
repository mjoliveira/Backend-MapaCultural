const itinerarioRepository = require("../../infrastructure/itinerario/itinerarioRepository");
const {ResultadoVazioException} = require("../../utils/Exceptions");

module.exports = {
    salvarItinerario: function (itinerario) {
        return new Promise((resolve, reject) => {
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
    }
};