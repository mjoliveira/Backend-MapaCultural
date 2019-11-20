const autenticacaoService = require('../../src/business/autenticacao/autenticacaoService');
const autenticacaoRepository = require('../../src/infrastructure/autenticacao/autenticacaoRepository');
const {
    adminCadastrado,
    adminSemLogin,
    adminLogin,
    retornoLogin
} = require('../mocks/autenticacaoMock');


describe('Testes autenticacao', () => {
    it("Verifica login valido", async () => {
        jest.spyOn(autenticacaoRepository, 'login').mockResolvedValue(adminCadastrado);
        jest.spyOn(autenticacaoService, 'gerarToken').mockReturnValue("bnOWGxTI2a3rv6XepMwsGUyK");
        jest.spyOn(autenticacaoService, 'gerarValidadeToken').mockReturnValue("2019-11-19T21:00:14.022Z");
        jest.spyOn(autenticacaoRepository, 'atualizarUsuario').mockResolvedValue();

        return expect(autenticacaoService.login(adminLogin)).resolves.toEqual(retornoLogin);
    });

    it("Verifica login invalido", async () => {
        jest.spyOn(autenticacaoRepository, 'login').mockResolvedValue(adminCadastrado);

        return expect(autenticacaoService.login(adminSemLogin)).rejects.toBe("Usuário ou senha inválidos!");
    });
});