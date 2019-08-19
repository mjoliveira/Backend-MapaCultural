const userService = require('../src/services/userService');
const User = require('../src/models/User');

jest.mock('../src/models/User', () => () => {
    const SequelizeMock = require("sequelize-mock");
    const dbMock = new SequelizeMock();
    return dbMock.define('User',  {
        userId: 1,
        name: "Gabriel",
        createdAt: "2019-01-01 13:30:31",
        updatedAt: "2019-01-01 13:30:31"
    })
});


describe('Retorna ID do Usuario', () => {
    it("Retorna ID do Usuario", async () => {
        const users = await userService.getUsers();
        expect(users[0].name).toBe("Gabriel");
    });
});