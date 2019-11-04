const {Itinerario, Instituicao, ItinerarioInstituicoes} = require('../../models');

module.exports = {
    salvarItinerario: function (itinerario) {
        return Itinerario.create({
            nome: itinerario.nome,
            tempoCaminhada: itinerario.tempoCaminhada,
            tempoCarro: itinerario.tempoCarro,
            tempoBicicleta: itinerario.tempoBicicleta
        }).then((itinerarioSalvo) => {
            itinerario.instituicoes.map((instituicao, index) => ItinerarioInstituicoes.build({
                InstituicaoId: instituicao.id,
                ItinerarioId: itinerarioSalvo.id,
                ordem: index + 1
            })).forEach(itinerarioInstituicoes => itinerarioInstituicoes.save());
        });
    },


    buscarItinerarios: () => {
        return Itinerario.findAll({
            include: [{
                model: Instituicao,
                as: 'instituicoes'
            }]
        });
    },

    atualizarItinerario: function (id, itinerario) {
        return Itinerario.update({
            nome: itinerario.nome,
            tempoCaminhada: itinerario.tempoCaminhada,
            tempoCarro: itinerario.tempoCarro,
            tempoBicicleta: itinerario.tempoBicicleta
        }, {
            where: {id: id}
        });
    },

    deletar: function (id) {
        console.log(id + "<------------");
        return new Promise((resolve, reject) => {
            ItinerarioInstituicoes.destroy({where: {ItinerarioId: id}})
                .then(() => {
                    Itinerario.destroy({where: {id: id}})
                        .then(() => {
                            resolve();
                        })
                        .catch(() => {
                            reject();
                        });
                })
                .catch(() => {
                    reject();
                });
        });
    }

};
