module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable("Redes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },

      redeSocial: {
        allowNull: true,
        type: DataTypes.STRING
      }
    });
  },
  down: queryInterface => {
    return queryInterface.dropTable("Redes");
  }
};
