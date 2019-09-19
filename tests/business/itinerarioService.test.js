const itinerarioService = require('../../src/business/itinerario/itinerarioService');
const itinerarioRepository = require('../../src/infrastructure/itinerario/itinerarioRepository');
const { itinerario } = require('../mocks/itinerarioMock');
// const err = new Error('ResultadoVazioException');

describe('Teste buscar dados de itinerario', () => {
    it("Retorna todos os itinerarios do banco", async () => {
        jest.spyOn(itinerarioRepository, 'buscarItinerarios').mockResolvedValue([itinerario]);
        const itinerarios = await itinerarioService.buscarItinerarios();
        expect(itinerarioRepository.buscarItinerarios).toHaveBeenCalledTimes(1);
        expect(itinerarios[0]).toEqual(itinerario);
    });

    it("Retorna uma exceção ao não ter dados", async () => {
        jest.spyOn(itinerarioRepository, 'buscarItinerarios').mockResolvedValue([]);
        expect(itinerarioService.buscarItinerarios()).toThrow;
    });

        // expect(sc.getTemplateName).toThrow(Error);
        // ResultadoVazioException
});