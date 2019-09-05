const { Institucao } = require('../../models');

module.exports = {
    getInstituicao: function(){
        return new Promise((resolve, reject) => {
            Institucao.findAll().then(instituicao => {
                console.log(instituicao);
                resolve(instituicao);
            }).catch(err => {
                console.log(err);
                reject(err);
            });
        });
    }
};