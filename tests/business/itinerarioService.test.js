const itinerarioService = require('../../src/business/itinerario/itinerarioService');
const itinerarioRepository = require('../../src/infrastructure/itinerario/itinerarioRepository');
const {itinerarioCompleto,
       itinerarioVazio
} = require('../mocks/itinerarioMock');

describe('Teste buscar dados de itinerario', () => {
    it("Retorna todos os itinerarios do banco", async () => {
        jest.spyOn(itinerarioRepository, 'buscarItinerarios').mockResolvedValue([itinerarioCompleto]);

        return expect(itinerarioService.buscarItinerarios()).resolves.toEqual([itinerarioCompleto]);
    });

    it("Testa exception Resultado Vazio", async () => {
        jest.spyOn(itinerarioRepository, 'buscarItinerarios').mockResolvedValue([]);

        return expect(itinerarioService.buscarItinerarios()).rejects.toThrow('Não foi encontrado nenhum valor de itinerario');
    });
});

describe('Testes Salvar Itinerario', () => {
    it("Salva Itinerario com todos parametros", async () => {
        jest.spyOn(itinerarioRepository, 'salvarItinerario').mockImplementation().mockResolvedValue();
        return itinerarioRepository.salvarItinerario(itinerarioCompleto).then(() => {
            expect(itinerarioRepository.salvarItinerario).toHaveBeenCalledWith(itinerarioCompleto);
        });
    });

    it("Salva Itinerario sem lista de instituicoes", async () => {
        jest.spyOn(itinerarioRepository, 'salvarItinerario').mockImplementation().mockResolvedValue();
        return expect(itinerarioService.salvarItinerario(itinerarioVazio)).rejects.toThrow('Não é possivel criar um itinerário sem instituições!');
    });

});

describe('Testes Atualizar Itinerario', () => {
    it("Atualiza informacoes basicas", async () => {
        jest.spyOn(itinerarioRepository, 'atualizarItinerario').mockImplementation().mockResolvedValue();
        return itinerarioService.atualizarItinerario(1, itinerarioCompleto).then(() => {
            expect(itinerarioRepository.atualizarItinerario).toHaveBeenCalledWith(1, itinerarioCompleto);
        });
    });

    it("Altera itinerario sem lista de instituicoes", async () => {
        jest.spyOn(itinerarioRepository, 'atualizarItinerario').mockImplementation().mockResolvedValue();
        return expect(itinerarioService.atualizarItinerario(itinerarioVazio)).rejects.toThrow('Não foi encontrado nenhum valor de itinerario');
    });

});

describe('Testes Deletar Itinerario', () => {
    it('Deleta Itinerario por ID', async () => {
        jest.spyOn(itinerarioRepository, 'deletar').mockResolvedValue();

        return expect(itinerarioService.deletar(itinerarioCompleto.id)).resolves;
    });

    it('Testa execption para ID não encontrado', async () => {
        jest.spyOn(itinerarioRepository, 'deletar').mockResolvedValue(0);

        return expect(itinerarioService.deletar(2)).rejects.toThrow('Não foi encontrado nenhum valor de itinerario');
    });
});
