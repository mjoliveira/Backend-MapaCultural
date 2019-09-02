const { institution } = require('../../models');

module.exports = {
    saveInstitution: function (name) {
        return new Promise((resolve, reject) => {
                console.log(name);
                resolve(name);
        });
    }
}

