const Restaurant = require("../models/restaurants");
const Review = require("../models/review");

exports.getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.findAll();
    res.json(restaurants);
  } catch (err) {
    console.log(err + " in Restaurant Controller");
    res
      .status(500)
      .json({ error: "An error occurred in Restaurant Controller" });
  }
};

exports.getRestaurantDetails = async (req, res) => {
  const restaurantId = req.params.id;

  try {
    const restaurant = await Restaurant.findByPk(restaurantId, {
      include: Review,
    });

    if (!restaurant) {
      return res.status(404).json({ error: "Restaurant not Found" });
    }

    res.json(restaurant);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ error: "An error occured in Restaurant Controller" });
  }
};

exports.getAdminPage = async (req, res) => {
  try {
    const restaurants = await Restaurant.findAll({
      attributes: ["id", "name"],
      include: {
        model: Review,
        attributes: [],
      },
      raw: true,
      group: ["Restaurant.id"],
    });

    const adminData = restaurants.map((restaurant) => ({
      id: restaurant.id,
      name: restaurant.name,
      totalReviews: restaurant["Reviews.id"]
        ? restaurant["Reviews.id"].length
        : 0,
    }));

    res.json(adminData);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ error: "An error occured in Restaurant Controller" });
  }
};
