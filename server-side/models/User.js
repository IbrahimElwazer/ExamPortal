const Sequelize = require('sequelize');
const db = require('../database');

module.exports = db.sequelize.define(
    'login',
    {
        ID: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        type: {
            type: Sequelize.STRING
        }
    }, {
        freezeTableName: true,
        timestamps: false
    }
);