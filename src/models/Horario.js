module.exports = (sequelize, DataTypes) => {
  const Imagem = sequelize.define("Horario", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    dia: {
      type: DataTypes.DATE,
      AllowNull: false
    },

    horaAbertura: {
      type: DataTypes.TIME,
      AllowNull: false
    },

    horaFechamento: {
      type: DataTypes.TIME,
      AllowNull: false
    }
  });
  return Horario;
};
