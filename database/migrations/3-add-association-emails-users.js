module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn(
            'Emails',
            'UserId',
            {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Users',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            }
        );
    },

    down: (queryInterface) => {
        return queryInterface.removeColumn(
            'Emails',
            'UserId'
        );
    }
};