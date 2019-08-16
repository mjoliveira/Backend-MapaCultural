const userService = require('../src/services/userService');
const userRepository = require('../src/repositories/userRepository');
const User = require('../src/models/User');

jest.mock('../src/repositories/userRepository', () =>({
    getUsers: function(){ return {
        id:1,
        nome:"Gabriel"
    }},
}));



test('Retorna ID do Usuario', () => {
    userResult = new User.User(1,"Gabriel");
    expect(userService.getUsers()).toEqual(userResult);
});