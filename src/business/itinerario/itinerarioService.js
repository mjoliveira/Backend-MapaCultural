const itinerarioRepository = require("../../infrastructure/itinerario/itinerarioRepository");
const {ResultadoVazioException} = require("../../utils/Exceptions");

module.exports = {
    buscarItinerarios: function() {
        return itinerarioRepository.buscarItinerarios()
            .then(result => {
                if(result.length < 1){
                    throw new ResultadoVazioException('itinerario',result);
                }
                return result;
            })
            .catch(err => {
                throw err;
            });
    }
};