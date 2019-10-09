const {Itinerario, Instituicao} = require('../../models');

module.exports = {
    buscarItinerarios: () => {
        return Itinerario.findAll({include:[{
                model: Instituicao,
                as: 'instituicoes'
            }]
        });
    }
};
