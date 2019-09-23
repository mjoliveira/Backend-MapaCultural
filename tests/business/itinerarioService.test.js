const itinerarioService = require('../../src/business/itinerario/itinerarioService');
const itinerarioRepository = require('../../src/infrastructure/itinerario/itinerarioRepository');
const {itinerario} = require('../mocks/itinerarioMock');

describe('Teste buscar dados de itinerario', () => {
    it("Retorna todos os itinerarios do banco", async () => {
        jest.spyOn(itinerarioRepository, 'buscarItinerarios').mockResolvedValue([itinerario]);

        return expect(itinerarioService.buscarItinerarios()).resolves.toEqual([itinerario]);
    });

    it("Testa exception Resultado Vazio", async () => {
        jest.spyOn(itinerarioRepository, 'buscarItinerarios').mockResolvedValue([]);

        return expect(itinerarioService.buscarItinerarios()).rejects.toThrow('Não foi encontrado nenhum valor de itinerario');
    });
});