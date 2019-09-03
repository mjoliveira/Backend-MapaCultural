module.exports = {
    up: (queryInterface, DataTypes) => {
      return queryInterface.createTable('Admins', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
        nome: {
            allowNull: false,
            type: DataTypes.STRING
            
        },
        login: {
            allowNull: false,
            type: DataTypes.STRING
            
        },
        senha: {
            allowNull: false,
            type: DataTypes.STRING
            
        }
      });
    },
  
    down: (queryInterface) => {
      return queryInterface.dropTable('Admins');
    }
  };