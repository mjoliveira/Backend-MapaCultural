module.exports = (sequelize, DataTypes) => {
  const Itinerarioinstituicoes = sequelize.define("Itinerarioinstituicoes", {
    ordem: {
      type: DataTypes.INTEGER,
      AllowNull: false
    }
    
  });

  Itinerarioinstituicoes.associate = models => {
    Itinerarioinstituicoes.hasMany(models.Itinerario);
  }

  return Itinerarioinstituicoes;
};
