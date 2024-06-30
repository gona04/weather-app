const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("weather_app", "root", "Password", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
