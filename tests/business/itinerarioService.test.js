const itinerarioService = require('../../src/business/itinerario/itinerarioService');
const itinerarioRepository = require('../../src/infrastructure/itinerario/itinerarioRepository');
const {itinerarioCompleto,
       itinerarioSemInstituicoes,
    //    itinerarioSemID
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
        return expect(itinerarioService.salvarItinerario(itinerarioSemInstituicoes)).rejects.toThrow('Não é possivel criar um itinerário sem instituições!');
    });

});

// describe('Testes Deletar Itinerario', () => {
//     it("Deleta Itinerario com ID", async () => {
//         jest.spyOn(itinerarioRepository, 'deletar').mockImplementation().mockResolvedValue();
//         return itinerarioRepository.deletar(itinerarioCompleto.id).then(() => {
//             expect(itinerarioRepository.deletar(1)).toHaveBeenCalledWith(itinerarioCompleto);
//         });
//     });
//
//     it ("Deleta Itinerario sem ID", async () => {
//         jest.spyOn(itinerarioRepository, 'deletar').mockImplementation().mockResolvedValue();
//         return expect(itinerarioService.salvarItinerario()).rejects.toThrow('Não é possível deletar um itinerário sem ');
//     });
// });

describe('Testes Deletar Itinerario', () => {
    it('Deleta Itinerario por ID', async () => {
        jest.spyOn(itinerarioRepository, 'deletar').mockResolvedValue(itinerarioCompleto);

        return expect(itinerarioService.deletar(itinerarioCompleto.id)).resolves.toEqual(itinerarioCompleto);
    });

    it('Testa execption para ID não encontrado', async () => {
        jest.spyOn(itinerarioRepository, 'deletar').mockRejectedValue();

        return expect(itinerarioRepository.deletar(2)).rejects.toThrow('Não foi encontrado nenhum valor de itinerario');
    });
});
