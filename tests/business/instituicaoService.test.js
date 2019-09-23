const instituicaoService = require('../../src/business/instituicao/instituicaoService');
const instituicaoRepository = require('../../src/infrastructure/instituicao/instituicaoRepository');

const intituicaoMock = {
    id: 1,
    nome: "Ibere"
}

describe('Retorna ID da Instituicao', () => {
    it("Retorna ID da Instituicao", async () => {
        jest.spyOn(instituicaoRepository, 'buscarInstituicoes').mockResolvedValue([intituicaoMock]);

        return expect(instituicaoService.buscarInstituicoes()).resolves.toEqual([intituicaoMock]);
    });

    it("Testa exception para lista vazia", async () => {
        jest.spyOn(instituicaoRepository, 'buscarInstituicoes').mockResolvedValue([]);

        return expect(instituicaoService.buscarInstituicoes()).rejects.toThrow('Não foi encontrado nenhum valor de instituicao');

    });
});