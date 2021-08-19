// import Sequelize constructor from library
const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to DB
const sequelize = new Sequelize('just_tech_news_db', 'root', '$uperLazy123', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;
