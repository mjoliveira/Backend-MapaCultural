const {Itinerario} = require('../../models');

module.exports = {
    buscarItinerarios: () => {
        return Itinerario.findAll({
            attributes: {exclude: ["ItinerarioInstituicaoId"]}
        });
    }
};
