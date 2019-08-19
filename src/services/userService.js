const userRepository = require("../repositories/userRepository");

module.exports = {
    getUsers: function () {
        return userRepository.getUsers();
    },
    saveUser: function (name) {
        return userRepository.saveUser(name);
    }
};