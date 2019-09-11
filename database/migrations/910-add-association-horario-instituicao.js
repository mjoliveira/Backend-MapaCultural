module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn("Horarios", "InstituicaoID", {
            type: Sequelize.INTEGER,
            references: {
                model: "Instituicoes",
                key: "id"
            },
            onUpdate: "CASCADE",
            onDelete: "SET NULL"
        });
    },

    down: queryInterface => {
        return queryInterface.removeColumn("Horarios", "InstituicaoID");
    }
};
  