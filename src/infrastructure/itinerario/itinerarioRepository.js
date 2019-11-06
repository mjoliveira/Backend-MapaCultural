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
<<<<<<< HEAD
    },

    deletar: function (id) {
        console.log("Teste - Repository. ID: " + id);
        return new Promise((resolve, reject) => {
            ItinerarioInstituicoes.destroy({where: {ItinerarioId: id}})
                .then(() => {
                    Itinerario.destroy({where: {id: id}})
                        .then((itinerario) => {
                            resolve(itinerario);
                        })
                        .catch(err => {
                            reject(err);
                        });
                })
                .catch((err) => {
                    reject(err);
                });
        });
=======
>>>>>>> 09ecc788d2046283426a57428f51399ce4f4a51f
    }

};
