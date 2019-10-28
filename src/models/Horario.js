module.exports = (sequelize, DataTypes) => {
    const Horario = sequelize.define("Horario", {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },

            dia: {
                type: DataTypes.STRING,
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
        },
        {
            timestamps: false,
            freezeTableName: true,
            tableName: 'Horarios'
        });

        Horario.associate = models => {
            Horario.belongsTo(models.Instituicao, {foreignKey: 'InstituicaoID'});
        };

    return Horario;
};
