const userService = require('../services/userService');
const userRepository = require('../repositories/userRepository');

jest.mock('../repositories/userRepository', () =>({
    getUsers: function(){return 1},
}));



test('Retorna ID do Usuario', () => {
    expect(userService.getUsers()).toBe(1);
  });