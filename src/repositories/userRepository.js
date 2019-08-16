var User = require('../models/User');


module.exports = {
    getUsers: function(){
        //Busca de dados (Outro serviço ou Bd)
        const user = new User.User(1,"Gabriel");
        return user;
    }
};