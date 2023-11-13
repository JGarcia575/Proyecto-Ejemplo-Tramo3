const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/mysqlConection');

const Usuario = sequelize.define('Usuarios', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false
     }
  });

module.exports = Usuario;









