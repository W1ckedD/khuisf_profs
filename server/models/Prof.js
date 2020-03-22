const Sequelize = require('sequelize');
const sequelize = require('../config/dbConfig');

module.exports = sequelize.define('prof', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    fistName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    imageUrl: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: true
    },
    researchField: {
        type: Sequelize.STRING,
        allowNull: true
    },
    bio: {
        type: Sequelize.TEXT,
        allowNull: true
    }
});