module.exports = {
    up: (queryInterface, DataTypes) => {
        return queryInterface.createTable('Emails', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            address: {
                allowNull: false,
                type: DataTypes.STRING,
            },
        });
    },

    down: (queryInterface) => {
        return queryInterface.dropTable('Emails');
    }
};