const instituicaoService = require('../../src/business/instituicao/instituicaoService');
const instituicaoRepository = require('../../src/infrastructure/instituicao/instituicaoRepository');

const intituicaoMock =
[{
    id: 1,
    nome: "MASP",
    endereco: "Av. Paulista",
    tempoVisita: 2,
    descricao: "Maior Vão aberto da america latina",
    latitude: 40.7143528,
    longitude: -74.0059731,
    email: "masp@masp.com",
    telefone: "939393934",
    observacoes: "isto"
},
{
    id: 2,
    nome: "Metropolin Museu",
    endereco: "Stret Aveneu",
    tempoVisita: 2,
    descricao: "Maior Vão aberto da america do norte",
    latitude: 40.7143528,
    longitude: -74.0059731,
    email: "mnym@masp.com",
    telefone: "939393934",
    observacoes: "isto"
}]

describe('Retorna ID da Instituicao', () => {
    it("Retorna ID da Instituicao", async () => {
        jest.spyOn(instituicaoRepository, 'buscarInstituicoes').mockResolvedValue([intituicaoMock]);

        return expect(instituicaoService.buscarInstituicoes()).resolves.toEqual([intituicaoMock]);
    });

    it('Testa exception para lista vazia', async () => {
        jest.spyOn(instituicaoRepository, 'buscarInstituicoes').mockResolvedValue([]);

        return expect(instituicaoService.buscarInstituicoes()).rejects.toThrow('Não foi encontrado nenhum valor de instituicao');

    });

    it('Busca instituição por ID', async () => {
        jest.spyOn(instituicaoRepository, 'buscarInstituicaoPorID').mockResolvedValue(intituicaoMock[1]);

        return expect(instituicaoService.buscarInstituicaoPorID(2)).resolves.toEqual(intituicaoMock[1]);
    });

    it('Testa execption para ID não encontrado', async () => {
        jest.spyOn(instituicaoRepository, 'buscarInstituicaoPorID').mockResolvedValue();

        return expect(instituicaoService.buscarInstituicaoPorID(2)).rejects.toThrow('Não foi encontrado nenhum valor de instituicao');
    });
});