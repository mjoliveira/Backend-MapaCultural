const itinerarioService = require('../../src/business/itinerario/itinerarioService');
const itinerarioRepository = require('../../src/infrastructure/itinerario/itinerarioRepository');
const { itinerario } = require('../mocks/itinerarioMock');

describe('Teste buscar dados de itinerario', () => {
    it("Retorna todos os itinerarios do banco", async () => {
        jest.spyOn(itinerarioRepository, 'buscarItinerarios').mockResolvedValue([itinerario]);
        const itinerarios = await itinerarioService.buscarItinerarios();
        expect(itinerarioRepository.buscarItinerarios).toHaveBeenCalledTimes(1);
        expect(itinerarios[0]).toEqual(itinerario);
    });
    // it("Retorna uma exceção ao não ter dados", () =>)

});


//
// describe('Retorna ID da Instituicao', () => {
//     it("Retorna ID da Instituicao", async () => {
//         jest.spyOn(instituicaoRepository, 'buscarInstituicoes').mockResolvedValue([intituicaoMock]);
//         const institutions = await instituicaoService.buscarInstituicoes();
//         expect(instituicaoRepository.buscarInstituicoes).toHaveBeenCalledTimes(1);
//         expect(institutions[0]).toEqual(intituicaoMock);
//     });
// });
