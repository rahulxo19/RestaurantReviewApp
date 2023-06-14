const Review = require("../models/review");

exports.submitReview = async (req, res) => {
  const { id } = req.params;
  const { reviewText } = req.body;
  try {
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
