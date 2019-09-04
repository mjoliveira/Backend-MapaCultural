module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("ItinerarioInstituicoes", {
            ItinerarioId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Itinerarios",
                    key: "id"
                },
                onUpdate: "CASCADE",
                onDelete: "SET NULL"
            },
            InstituicaoId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Instituicoes",
                    key: "id"
                },
                onUpdate: "CASCADE",
                onDelete: "SET NULL"
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
