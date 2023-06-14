const express = require("express");
const router = express.Router();
const restaurantController = require("../controllers/RestaurantController");
const reviewController = require("../controllers/ReviewController");

router.get("/", restaurantController.getAllRestaurants);
router.get("/:id", restaurantController.getRestaurantDetails);

router.post("/:id/reviews", reviewController.submitReview);

module.exports = router;
