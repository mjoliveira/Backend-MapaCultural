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
    });

    return Email;
};