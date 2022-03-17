const Sequelize = require('sequelize');

const connetion = new Sequelize('guiaperguntas', 'netodev', 'jn13081997', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connetion;
