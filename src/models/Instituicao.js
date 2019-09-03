module.exports = (sequelize, DataTypes) => {
    const Instituicao = sequelize.define('Instituicao', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        distance: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        open: {
            type: DataTypes.STRING,
            allowNull: false
        }

    });

    return Instituicao;
};






