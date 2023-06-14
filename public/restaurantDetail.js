// Get the restaurant ID from the URL
const restaurantId = localStorage.getItem("id");
console.log(restaurantId);

// Fetch the restaurant details and reviews from the backend
axios
  .get(`http://localhost:3000/restaurants/${restaurantId}`)
  .then((response) => {
    console.log(response);
    const restaurant = response.data;

    // Get the reference to the restaurant detail element
    const restaurantDetail = document.getElementById("restaurant-detail");

    // Create the HTML markup dynamically
    restaurantDetail.innerHTML = `
      <h2>${restaurant.name}</h2>
      <p>${restaurant.address}</p>
      <p>${restaurant.description}</p>

      <h3>Reviews</h3>
      <ul id="reviews-list">
        ${restaurant.Reviews.map(
          (review) => `<li>${review.reviewText}</li>`
        ).join("")}
      </ul>

      <form id="review-form">
        <input type="text" name="reviewText" placeholder="Enter your review" required>
        <button type="submit">Submit</button>
      </form>
    `;

    // Handle form submission
    const reviewForm = document.getElementById("review-form");
    reviewForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = new FormData(reviewForm);
      const reviewText = formData.get("reviewText");

      // Submit the review to the backend
      axios
        .post(`http://localhost:3000/restaurants/${restaurantId}/reviews`, {
          reviewText,
        })
        .then((response) => {
          console.log(response.data);

          // Create a new list item for the added review
          const reviewList = document.getElementById("reviews-list");
          const newReviewItem = document.createElement("li");
          newReviewItem.textContent = response.data.reviewText;
          reviewList.appendChild(newReviewItem);

          // Clear the input field
          reviewForm.reset();
        })
        .catch((error) => {
          console.error(error);
        });
    });
  })
  .catch((error) => {
    console.error(error);
  });
