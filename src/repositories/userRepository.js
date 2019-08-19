const { User } = require('../models');


module.exports = {
    getUsers: function(){
        return new Promise((resolve, reject) => {
            User.findAll().then(users => {
                console.log(users);
                resolve(users);
            }).catch(err => {
                console.log(err);
                reject(err);
            });
        });
    },
    saveUser: function (name) {
        const user = User.create({
            name:name
        });
        return user;
    }
};