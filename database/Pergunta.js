
const Sequelize = require("sequelize");
const connetion = require("./database");

const Pergunta = connetion.define('pergunta', {
    titulo:{
        type: Sequelize.STRING,
        allowNull: false
    },

    descricao:{
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Pergunta.sync({force: false}).then(() =>{});

module.exports = Pergunta;