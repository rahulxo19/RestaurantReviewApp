window.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await axios.get("http://localhost:3000/restaurants");
    console.log(response);

    const restaurants = response.data;

    // Get the reference to the restaurant list element
    const restaurantList = document.getElementById("restaurant-list");

    // Iterate over the restaurants and create list items dynamically
    restaurants.forEach((restaurant) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
                    <h2>${restaurant.name}</h2>
                    <p>${restaurant.address}</p>
                  </a>
                `;

      listItem.addEventListener("click", () => {
        localStorage.setItem("id", restaurant.id);
        window.location.href = "./restaurantDetail.html";
      });
      restaurantList.appendChild(listItem);
    });
  } catch (err) {
    console.log(err);
  }
});
