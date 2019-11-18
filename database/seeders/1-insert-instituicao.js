module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Instituicoes', [{
            nome: 'Museu Teste - PUCRS',
            endereco: 'Av. Ipiranga, 6681',
            tempoVisita: 10,
            descricao: 'Aliquam gravida euismod mattis. Suspendisse tristique urna et libero luctus.',
            latitude: -30.058365,
            longitude: -51.173244,
            email: 'teste@pucrs.br',
            telefone: '(51)99999999',
            observacoes: ''
        }], {});

        const instituicoes = await queryInterface.sequelize.query(
            `SELECT id from Instituicoes;`
        );

        const instituicoesLinhas = instituicoes[0];

        await queryInterface.bulkInsert('Horarios', [
            {dia: 'seg', horaAbertura: '08:00', horaFechamento: '18:00', InstituicaoID: instituicoesLinhas[0].id},
            {dia: 'ter', horaAbertura: '08:00', horaFechamento: '18:00', InstituicaoID: instituicoesLinhas[0].id},
            {dia: 'qua', horaAbertura: '08:00', horaFechamento: '18:00', InstituicaoID: instituicoesLinhas[0].id},
            {dia: 'qui', horaAbertura: '08:00', horaFechamento: '18:00', InstituicaoID: instituicoesLinhas[0].id},
            {dia: 'sex', horaAbertura: '08:00', horaFechamento: '18:00', InstituicaoID: instituicoesLinhas[0].id},
        ], {});

        await queryInterface.bulkInsert('Redes', [
            {redeSocial: "facebook.com/teste", InstituicaoID: instituicoesLinhas[0].id}
        ], {});

        await queryInterface.bulkInsert('Imagens', [
            {url: "https://i.imgur.com/fmUKZu8.jpg", InstituicaoID: instituicoesLinhas[0].id}
        ], {});

        await queryInterface.bulkInsert('Itinerarios', [
            {
                nome: "Museus para Visitar",
                tempoCaminhada: 10,
                tempoCarro: 10,
                tempoBicicleta: 10
            }
        ], {});

        let itinerarios = await queryInterface.sequelize.query(
            `SELECT id from Itinerarios where nome = "Museus para Visitar" ;`
        );

        itinerarios = itinerarios[0];

        return queryInterface.bulkInsert('ItinerarioInstituicoes', [
            {
                ItinerarioId: itinerarios[0].id,
                InstituicaoId: instituicoesLinhas[0].id,
                ordem: 1
            }
        ], {});

    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Horarios', null, {});
        await queryInterface.bulkDelete('Redes', null, {});
        await queryInterface.bulkDelete('Imagens', null, {});
        await queryInterface.bulkDelete('ItinerarioInstituicoes', null, {});
        await queryInterface.bulkDelete('Instituicoes', null, {});
        return  queryInterface.bulkDelete('Itinerarios', null, {});
    }
};