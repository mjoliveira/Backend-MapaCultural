const institutionService = require('../../src/business/instituicao/institutionService');
const instituicaoRepository = require('../../src/infrastructure/instituicao/institutionRepository');

const intituicaoMock = {
    id: 1,
    nome: "Ibere"
}

describe('Retorna ID da Instituicao', () => {
    it("Retorna ID da Instituicao", async () => {
        jest.spyOn(instituicaoRepository, 'getInstituicao').mockResolvedValue(intituicaoMock);
        const institutions = await institutionService.getInstitution();
        expect(instituicaoRepository.getInstituicao).toHaveBeenCalledTimes(1);
        expect(institutions).toEqual(intituicaoMock);
    });
});