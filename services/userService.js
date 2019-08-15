var userRepository = require("../repositories/userRepository");

module.exports = {
    getUsers: function () {
        return userRepository.getUsers();
    }
}