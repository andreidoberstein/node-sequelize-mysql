const sequelize = require('sequelize');
const database = require('../config/db');

const Fabricante = database.define('fabricante', {
  id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nome: {
    type: sequelize.STRING,
    allowNull: false
  },
})

module.exports = Fabricante;