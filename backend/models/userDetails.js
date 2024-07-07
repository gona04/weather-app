const {DataTypes} = require("sequelize");
const sequelize = require("../server/db");

const UserDetails = sequelize.define("user_details", {
  userId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  ip: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  login_country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  login_city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = UserDetails;
