const sequelize = require('sequelize');
const database = require('../config/db');
 
const Produto = database.define('produto', {
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
    preco: {
        type: sequelize.DOUBLE
    },
    descricao: sequelize.STRING
})
 
module.exports = Produto;