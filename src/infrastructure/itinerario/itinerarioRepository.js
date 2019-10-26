const {Itinerario, Instituicao, ItinerarioInstituicoes} = require('../../models');

module.exports = {
    buscarItinerarios: () => {
        return Itinerario.findAll({include:[{
                model: Instituicao,
                as: 'instituicoes'
            }]
        });
    },

    deletar: function (id){
        console.log(id + "<------------");
        return Itinerario.destroy({where: {id: id}});

    }
};
