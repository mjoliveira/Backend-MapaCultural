module.exports = (sequelize, DataTypes) => {
    const Email = sequelize.define('Email', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            address: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            timestamps: false,
            freezeTableName: true,
            tableName: 'Emails'
        });

    return Email;
};