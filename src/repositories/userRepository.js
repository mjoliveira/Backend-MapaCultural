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
        return new Promise((resolve, reject) => {
            User.create({
                name: name
            }).then(user => {
                console.log(user);
                resolve(user);
            }).catch(err => {
                console.log(err);
                reject(err);
            });
        });
    }
};