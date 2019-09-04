module.exports = (sequelize, DataTypes) => {
    const Itinerarioinstituicoes = sequelize.define("ItinerarioInstituicao", {
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

    Itinerarioinstituicoes.associate = models => {
        Itinerarioinstituicoes.hasMany(models.Itinerario);
    };

    return Itinerarioinstituicoes;
};
