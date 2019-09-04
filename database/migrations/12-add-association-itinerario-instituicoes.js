module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("ItinerarioInstituicoes", {
            ItinerarioId: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            InstituicaoId: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            ordem: {
                type: Sequelize.INTEGER,
                allowNull: false
            }
        });
    },

    down: queryInterface => {
        return queryInterface.dropTable("ItinerarioInstituicoes");
    }
};
