const Review = require("../models/review");
const Restaurant = require("../models/restaurants");

exports.submitReview = async (req, res) => {
  const { id } = req.params;
  const { reviewText } = req.body;
  try {
    const restaurant = await Restaurant.findByPk(id);

    if (!restaurant) {
      return res.status(404).json({ error: "Restaurant not found" });
    }

    const review = await Review.create({
      reviewText,
      RestaurantId: id,
    });

    res.status(201).json(review);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "An error occured in Review Controller" });
  }
};
