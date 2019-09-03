const userRepository = require("../../infrastructure/user/userRepository");
const userMock = require("../../../testeJson/users.json");
module.exports = {
    getUsers: function () {
        //return userRepository.getUsers();
        return userMock;
    },
    saveUser: function (name) {
        return userRepository.saveUser(name);
    }

};