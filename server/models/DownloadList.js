const Sequelize = require('sequelize');
const sequelize = require('../config/dbConfig');

module.exports = sequelize.define(
    'downloadList',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }
    },
    {
        charset: 'utf8',
        collate: 'utf8_unicode_ci'
    }
);
