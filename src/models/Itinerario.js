module.exports = (sequelize, DataTypes) => {
    const Itinerario = sequelize.define("Itinerario", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      nome: {
          type: DataTypes.STRING,
          AllowNull: false
      },
      tempoCaminhada: {
        type: DataTypes.INTEGER,
        AllowNull: false
    },
    tempoCarro: {
        type: DataTypes.INTEGER,
        AllowNull: false
    },
    tempoBicicleta: {
        type: DataTypes.INTEGER,
        AllowNull: false
    }

    });
    return Itinerario;
}