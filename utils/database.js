const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "restaurantapp",
  "<user_name>",
  "<user_password>",
  {
    dialect: "mysql",
    host: "localhost",
  }
);

module.exports = sequelize;
