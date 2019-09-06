const institutionService = require('../../src/business/institution/institutionRepository');

jest.mock('../../src/models/Instituticao', () => () => {
    const SequelizeMock = require("sequelize-mock");
    const dbMock = new SequelizeMock();
    return dbMock.define('Instituicao',  {
        nome: "teste333",
        endereco: "Av ipiranga",
        tempoVisita: 12,
        descricao: "descricao teste",
        latitude: 12.0,
        longitude: 13.0,
        email: "teste@teste.com",
        telefone: "123123123",
        observacoes: "asdfdff"
    });
});


describe('Retorna ID da Instituicao', () => {
    it("Retorna ID da Instituicao", async () => {
        const institutions = await institutionService.getInstitutions();
        expect(institutions[0].nome).toBe("teste333");
    });
});