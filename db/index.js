const { Sequelize } = require('sequelize');

// Create a connection to the MySQL database
const sequelize = new Sequelize('database_name', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
