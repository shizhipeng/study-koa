const Sequelize = require('sequelize');
const config = require('./db');

var sequelize = new Sequelize(config.database, config.user, config.password, {
	host: config.host,
	dialect: 'mysql',
	pool: {
		max: 10,
		min: 0,
		idle: 30000
	}
});
module.exports = sequelize;