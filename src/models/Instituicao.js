module.exports = (sequelize, DataTypes) => {
  const Instituicao = sequelize.define("Instituicao", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    nome: {
      type: DataTypes.STRING,
      allowNUll: false
    },

    endereco: {
      type: DataTypes.STRING,
      allowNUll: false
    },

    aberto: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },

    tempoVisita: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    descricao: {
      type: DataTypes.STRING,
      allowNull: true
    },

    latitude: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },

    longitude: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },

    email: {
      type: DataTypes.STRING,
      allowNull: true
    },

    telefone: {
      type: DataTypes.STRING,
      allowNull: false
    },

    observacoes: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Instituicao.associate = models => {
    Instituicao.hasMany(models.Imagem);
};

  return Instituicao;
};
