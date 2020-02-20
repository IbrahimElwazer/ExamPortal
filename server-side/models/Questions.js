const Sequelize = require('sequelize');
const db = require('../database');

module.exports = db.sequelize.define(
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