var Sequelize = require('sequelize')
var sequelize = require('../config/sequelize')
var User= sequelize.define('user', {
        id: {
            type: Sequelize.STRING(50),
            primaryKey: true
        },
        name: Sequelize.STRING(100),
        passwd: Sequelize.STRING(100)
    }, {
        timestamps: false
    });


module.exports = User