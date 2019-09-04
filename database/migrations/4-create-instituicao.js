module.exports = {
    up: (queryInterface, DataTypes) => {
        return queryInterface.createTable('Instituicoes', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            nome: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            endereco: {
                allowNull: false,
                type: DataTypes.STRING

            },
            aberto: {
                allowNull: false,
                type: DataTypes.BOOLEAN,

            },
            tempoVisita: {
                allowNull: false,
                type: DataTypes.INTEGER
            },
            descricao: {
                allowNull: true,
                type: DataTypes.STRING,
            },
            latitude: {
                allowNull: true,
                type: DataTypes.DOUBLE
            },

            longitude: {
                allowNull: true,
                type: DataTypes.DOUBLE

            },
            email: {
                allowNull: true,
                type: DataTypes.STRING
            },

            telefone: {
                allowNull: false,
                type: DataTypes.STRING
            },

            observacoes: {
                allowNull: false,
                type: DataTypes.STRING
            },
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: DataTypes.DATE,
            },
        });
    },

    down: (queryInterface) => {
        return queryInterface.dropTable('Instituicoes');
    }
};