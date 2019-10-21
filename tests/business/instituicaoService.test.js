const instituicaoService = require('../../src/business/instituicao/instituicaoService');
const instituicaoRepository = require('../../src/infrastructure/instituicao/instituicaoRepository');

const intituicaoMock = {
    id: 1,
    nome: "Museu Teste - PUCRS"
}

describe('Retorna ID da Instituicao', () => {
    it("Retorna ID da Instituicao", async () => {
        jest.spyOn(instituicaoRepository, 'buscarInstituicoes').mockResolvedValue([intituicaoMock]);
        const institutions = await instituicaoService.buscarInstituicoes();
        expect(institutions[0].id).toEqual(intituicaoMock.id);
    });
});