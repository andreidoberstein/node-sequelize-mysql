const sequelize = require('sequelize')
const connection = new sequelize(
  'crud_api',
  'root',
  'root',
  {
    dialect: 'mysql',
    host: 'localhost'
  }
)

module.exports = connection;