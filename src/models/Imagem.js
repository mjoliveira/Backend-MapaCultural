module.exports = (sequelize, DataTypes) => {
    const Imagem = sequelize.define("Imagem", {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },

            url: {
                type: DataTypes.STRING,
                AllowNull: true
            },
        },
        {
            timestamps: false,
            freezeTableName: true,
            tableName: 'Imagens'
        });
    return Imagem;
};