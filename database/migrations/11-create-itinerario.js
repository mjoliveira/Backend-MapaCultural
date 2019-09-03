module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable("Itinerarios", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },

      nome: {
        AllowNull: false,
        type: DataTypes.STRING
      },
      tempoCaminhada: {
        AllowNull: false,
        type: DataTypes.INTEGER
      },
      tempoCarro: {
        AllowNull: false,
        type: DataTypes.INTEGER
      },
      tempoBicicleta: {
        AllowNull: false,
        type: DataTypes.INTEGER
      }
    });
  },
  down: queryInterface => {
    return queryInterface.dropTable("Itinerarios");
  }
};
