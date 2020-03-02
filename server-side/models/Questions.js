const Sequelize = require('sequelize');
const sequelize = require('../database').sequelize;

module.exports = sequelize.define(
    'questions',
    {
        ID: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: Sequelize.STRING
        },
        category: {
            type: Sequelize.STRING
        }
    }, {
        timestamps: false
    }
);