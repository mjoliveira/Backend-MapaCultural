module.exports = (sequelize, DataTypes) => {
    const Imagem = sequelize.define("Itinerarioinstituicoes", {      
      ordem: {
          type: DataTypes.INTEGER,
          AllowNull: false
      }



    });
    return Itinerarioinstituicoes;
}