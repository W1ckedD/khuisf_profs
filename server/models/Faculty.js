const Sequelize = require('sequelize');
const sequelize = require('../config/dbConfig');

module.exports = sequelize.define('faculty', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});