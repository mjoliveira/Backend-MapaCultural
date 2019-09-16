const { Itinerario } = require('../../models');
const db = require('../../models');

module.exports = {
    buscarItinerarios: function(){
        return new Promise((resolve, reject) => {
            console.log(db.Instituicao);
            Itinerario.findAll({
                include: [{
                    models: db.Instituicao,
                    as: 'Instituicao',
                    required: false
                }]
            }).then(itinerario => {
                resolve(itinerario);
            }).catch(err => {
                reject(err);
            });
        });
    }
};
