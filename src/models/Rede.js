module.exports = (sequelize, DataTypes) => {
  const Itinerario = sequelize.define("Rede", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    redeSocial: {
      type: DataTypes.STRING,
      AllowNull: true
    }
  });
  return Rede;
};
