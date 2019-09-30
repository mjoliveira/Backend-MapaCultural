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

        return queryInterface.bulkInsert('Horarios', [
            {dia: 'segunda', horaAbertura: '08:00', horaFechamento: '18:00', InstituicaoID: instituicoesLinhas[0].id},
            {dia: 'terça', horaAbertura: '08:00', horaFechamento: '18:00', InstituicaoID: instituicoesLinhas[0].id},
            {dia: 'quarta', horaAbertura: '08:00', horaFechamento: '18:00', InstituicaoID: instituicoesLinhas[0].id},
            {dia: 'quinta', horaAbertura: '08:00', horaFechamento: '18:00', InstituicaoID: instituicoesLinhas[0].id},
            {dia: 'sexta', horaAbertura: '08:00', horaFechamento: '18:00', InstituicaoID: instituicoesLinhas[0].id},
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Horarios', null, {});
        return queryInterface.bulkDelete('Instituicoes', null, {});
    }
};