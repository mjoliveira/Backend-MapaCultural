module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable("Horarios", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },

      dia: {
        AllowNull: false,
        type: DataTypes.DATE
      },

      horaAbertura: {
        allowNull: false,
        type: DataTypes.TIME
      },

      horaFechamento: {
        allowNull: false,
        type: DataTypes.TIME
      }
    });
  },
  down: queryInterface => {
    return queryInterface.dropTable("Horarios");
  }
};
