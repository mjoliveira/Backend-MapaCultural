const itinerarioRepository = require("../../infrastructure/itinerario/itinerarioRepository");
const {ResultadoVazioException} = require("../../utils/Exceptions");

module.exports = {
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
        return new Promise((resolve, reject) => {
            itinerarioRepository.deletar(id)
                .then(itinerarios => resolve(itinerarios))
                .catch(err => {
                    reject(err);
                });
        })
    }
};