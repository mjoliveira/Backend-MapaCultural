const instituicaoService = require('../../src/business/instituicao/instituicaoService');
const instituicaoRepository = require('../../src/infrastructure/instituicao/instituicaoRepository');
const {
    instituicaoCompleta,
    instituicaoIncompleta,
    instituicaoNome,
    instituicaoHorarios,
    instituicaoRedes,
    instituicaoImagens,
    instituicaoCompletaErroDiaSemana,
    instituicaoCompletaErroTelefone
} = require('../mocks/instituicaoMock');


describe('Testes Buscar Instituicao', () => {
    it("Retorna Lista de Instituicao", async () => {
        jest.spyOn(instituicaoRepository, 'buscarInstituicoes').mockResolvedValue([instituicaoCompleta]);

        return expect(instituicaoService.buscarInstituicoes()).resolves.toEqual([instituicaoCompleta]);
    });

    it('Testa exception para lista vazia', async () => {
        jest.spyOn(instituicaoRepository, 'buscarInstituicoes').mockResolvedValue([]);

        return expect(instituicaoService.buscarInstituicoes()).rejects.toThrow('Não foi encontrado nenhum valor de instituicao');

    });
});

describe('Testes Buscar Instituicao', () => {
    it('Busca instituição por ID', async () => {
        jest.spyOn(instituicaoRepository, 'buscarInstituicaoPorID').mockResolvedValue(instituicaoCompleta);

        return expect(instituicaoService.buscarInstituicaoPorID(2)).resolves.toEqual(instituicaoCompleta);
    });

    it('Testa execption para ID não encontrado', async () => {
        jest.spyOn(instituicaoRepository, 'buscarInstituicaoPorID').mockResolvedValue();

        return expect(instituicaoService.buscarInstituicaoPorID(2)).rejects.toThrow('Não foi encontrado nenhum valor de instituicao');
    });
});

describe('Testes Salvar Instituicao', () => {
    it("Salva Instituicao com todos parametros", async () => {
        jest.spyOn(instituicaoRepository, 'salvarInstituicao').mockImplementation().mockResolvedValue();
        return instituicaoService.salvarInstituicao(instituicaoCompleta).then(() => {
            expect(instituicaoRepository.salvarInstituicao).toHaveBeenCalledWith(instituicaoCompleta);
        });
    });

    it("Salva Instituicao com parametros faltando", async () => {
        jest.spyOn(instituicaoRepository, 'salvarInstituicao').mockImplementation().mockResolvedValue();
        return instituicaoService.salvarInstituicao(instituicaoIncompleta).then(() => {
            expect(instituicaoRepository.salvarInstituicao).toHaveBeenCalledWith(instituicaoIncompleta);
        });
    });

    it("Erro ao salvar Instituicao com dia invalido", async () => {
        jest.spyOn(instituicaoRepository, 'salvarInstituicao').mockImplementation().mockResolvedValue();
        return expect(instituicaoService.salvarInstituicao(instituicaoCompletaErroDiaSemana)).rejects.toThrow('Erro ao validar horario');
    });

    it("Erro ao salvar Instituicao com telefone invalido", async () => {
        jest.spyOn(instituicaoRepository, 'salvarInstituicao').mockImplementation().mockResolvedValue();
        return expect(instituicaoService.salvarInstituicao(instituicaoCompletaErroTelefone)).rejects.toThrow('Erro ao validar telefone');
    });
});

describe('Testes Atualizar Instituicao', () => {
    it("Atualiza informacoes basicas", async () => {
        jest.spyOn(instituicaoRepository, 'atualizarInstituicao').mockImplementation().mockResolvedValue();

        return instituicaoService.atualizarInstituicao(1, instituicaoIncompleta).then(() => {
            expect(instituicaoRepository.atualizarInstituicao).toHaveBeenCalledWith(1, instituicaoIncompleta);
        });
    });

    it("Atualiza somente uma informacao", async () => {
        jest.spyOn(instituicaoRepository, 'atualizarInstituicao').mockImplementation().mockResolvedValue();

        return instituicaoService.atualizarInstituicao(1, instituicaoNome).then(() => {
            expect(instituicaoRepository.atualizarInstituicao).toHaveBeenCalledWith(1, instituicaoNome);
        });
    });

    it("Atualiza Horarios", async () => {
        jest.spyOn(instituicaoRepository, 'atualizarInstituicaoHorarios').mockImplementation().mockResolvedValue();

        return instituicaoService.atualizarInstituicaoHorarios(1, instituicaoHorarios).then(() => {
            expect(instituicaoRepository.atualizarInstituicaoHorarios).toHaveBeenCalledWith(1, instituicaoHorarios);
        });
    });

    it("Atualiza Redes", async () => {
        jest.spyOn(instituicaoRepository, 'atualizarInstituicaoRedes').mockImplementation().mockResolvedValue();

        return instituicaoService.atualizarInstituicaoRedes(1, instituicaoRedes).then(() => {
            expect(instituicaoRepository.atualizarInstituicaoRedes).toHaveBeenCalledWith(1, instituicaoRedes);
        });
    });

    it("Atualiza Imagens", async () => {
        jest.spyOn(instituicaoRepository, 'atualizarInstituicaoImagens').mockImplementation().mockResolvedValue();

        return instituicaoService.atualizarInstituicaoImagens(1, instituicaoImagens).then(() => {
            expect(instituicaoRepository.atualizarInstituicaoImagens).toHaveBeenCalledWith(1, instituicaoImagens);
        });
    });
});