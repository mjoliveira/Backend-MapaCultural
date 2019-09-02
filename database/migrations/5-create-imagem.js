module.exports = {
    up: (queryInterface, DataTypes) => {
      return queryInterface.createTable('Imagens', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },

        url: {
            allowNull: false,
            type: DataTypes.STRING


        }
    });

    },
    down: (queryInterface) => {
        return queryInterface.dropTable('Imagens');
}

  }
