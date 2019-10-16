const {Itinerario, Instituicao} = require('../../models');

module.exports = {
    salvarItinerario: function (itinerario) {
        return Instituicao.create({
            nome: itinerario.nome,
            tempoCaminhada: itinerario.tempoCaminhada,
            tempoCarro: itinerario.tempoCarro,
            tempoBicicleta: itinerario.tempoBicicleta
        });
    },


    buscarItinerarios: () => {
        return Itinerario.findAll({include:[{
                model: Instituicao,
                as: 'instituicoes'
            }]
        });
    }
};
