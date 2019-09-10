const instituicaoService = require('../../src/business/instituicao/instituicaoService');
const instituicaoRepository = require('../../src/infrastructure/instituicao/instituicaoRepository');

const intituicaoMock = {
    id: 1,
    nome: "Ibere"
}

describe('Retorna ID da Instituicao', () => {
    it("Retorna ID da Instituicao", async () => {
        jest.spyOn(instituicaoRepository, 'buscarInstituicoes').mockResolvedValue([intituicaoMock]);
        const institutions = await instituicaoService.buscarInstituicoes();
        expect(instituicaoRepository.buscarInstituicoes).toHaveBeenCalledTimes(1);
        expect(institutions[0]).toEqual(intituicaoMock);
    });
});