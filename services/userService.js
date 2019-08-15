var userRepository = require("../repositories/userRepository");

module.exports = {
    getUsers: function () {
        //Logica e Regras de Negocio
        return userRepository.getUsers();
    }
}