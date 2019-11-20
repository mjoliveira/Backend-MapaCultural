module.exports = (sequelize, DataTypes) => {
    const Admin = sequelize.define('Admin', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: DataTypes.STRING,
                allowNull: false
            },
            login: {
                type: DataTypes.STRING,
                allowNull: false
            },
            senha: {
                type: DataTypes.STRING,
                allowNull: false
            },
            token: {
                allowNull: true,
                type: DataTypes.STRING
            },
            validadeToken: {
                allowNull: true,
                type: DataTypes.DATE
            }
        },
        {
            timestamps: false,
            freezeTableName: true,
            tableName: 'Admins'
        });

    return Admin;
};