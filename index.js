const Express = require("express");
const sequelize = require("./utils/database");
const Restaurant = require("./models/restaurants");
const Review = require("./models/review");

const app = Express();

const restaurantRoutes = require("./routes/restaurantRoutes");

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.use("/restaurants", restaurantRoutes);

Restaurant.hasMany(Review);
Review.belongsTo(Restaurant);

sequelize
  .sync()
  .then(() => {
    app.listen(3000, () => {
      console.log(" Server is running on port 3000");
    });
  })
  .catch((err) => console.log(err));
