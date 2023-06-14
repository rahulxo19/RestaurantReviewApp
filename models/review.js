const { DataTypes } = require("sequelize");
const sequelize = require("../utils/database");

const Review = sequelize.define("Review", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  reviewText: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Review;
