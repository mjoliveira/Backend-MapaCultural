const userRepository = require("../repositories/userRepository");

module.exports = {
    getUsers: function () {
        return userRepository.getUsers();
    },
    saveUser: function (name) {
        let user = userRepository.saveUser(name);
        console.log(user);
        return user;
    }
};