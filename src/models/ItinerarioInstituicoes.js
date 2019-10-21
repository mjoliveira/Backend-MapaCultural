module.exports = (sequelize, DataTypes) => {
    const ItinerarioInstituicoes = sequelize.define("ItinerarioInstituicao", {
            ItinerarioId: {
                type: DataTypes.INTEGER,
                AllowNull: false
            },
            ordem: {
                type: DataTypes.INTEGER,
                AllowNull: false
            }

        },
        {
            timestamps: false,
            freezeTableName: true,
            tableName: 'ItinerarioInstituicoes'
        });

    return ItinerarioInstituicoes;
};
