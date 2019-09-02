const userRepository = require("../../infrastructure/user/userRepository");

module.exports = {
    getUsers: function () {
        return userRepository.getUsers();
    },
    saveUser: function (name) {
        return userRepository.saveUser(name);
    }

};