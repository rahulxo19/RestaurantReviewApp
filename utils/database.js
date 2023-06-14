const Sequelize = require("sequelize");

const sequelize = new Sequelize("restaurantapp", "root", "Qawsed@123", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
