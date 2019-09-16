const { Itinerario } = require('../../models');

module.exports = {
    buscarItinerarios: function(){
        return new Promise((resolve, reject) => {
            Itinerario.findAll({
                attributes: { exclude: ["ItinerarioInstituicaoId"] }
            }).then(itinerario => {
                resolve(itinerario);
            }).catch(err => {
                reject(err);
            });
        });
    }
};
