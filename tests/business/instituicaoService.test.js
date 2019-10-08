const instituicaoService = require('../../src/business/instituicao/instituicaoService');
const instituicaoRepository = require('../../src/infrastructure/instituicao/instituicaoRepository');
const {instituicao} = require('../mocks/instituicaoMock');

describe('Retorna lista de Instituições', () => {
    it("Retorna lista de Instituições", async () => {
        jest.spyOn(instituicaoRepository, 'buscarInstituicoes').mockResolvedValue(instituicao);

        return expect(instituicaoService.buscarInstituicoes()).resolves.toEqual(instituicao);
    });

    it('Testa exception para lista vazia', async () => {
        jest.spyOn(instituicaoRepository, 'buscarInstituicoes').mockResolvedValue([]);

        return expect(instituicaoService.buscarInstituicoes()).rejects.toThrow('Não foi encontrado nenhum valor de instituicao');

    });

    it('Busca instituição por ID', async () => {
        jest.spyOn(instituicaoRepository, 'buscarInstituicaoPorID').mockResolvedValue(instituicao[1]);

        return expect(instituicaoService.buscarInstituicaoPorID(2)).resolves.toEqual(instituicao[1]);
    });

    it('Testa execption para ID não encontrado', async () => {
        jest.spyOn(instituicaoRepository, 'buscarInstituicaoPorID').mockResolvedValue();

        return expect(instituicaoService.buscarInstituicaoPorID(2)).rejects.toThrow('Não foi encontrado nenhum valor de instituicao');
    });
});