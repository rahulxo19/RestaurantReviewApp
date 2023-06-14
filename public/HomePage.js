// Fetch the list of restaurants from the backend
axios
  .get("http://localhost:3000/")
  .then((response) => {
    const restaurants = response.data;

    // Get the reference to the restaurant list element
    const restaurantList = document.getElementById("restaurant-list");

    // Iterate over the restaurants and create list items dynamically
    restaurants.forEach((restaurant) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <a href="/restaurants/${restaurant.id}">
          <h2>${restaurant.name}</h2>
          <p>${restaurant.address}</p>
        </a>
      `;

      restaurantList.appendChild(listItem);
    });
  })
  .catch((error) => {
    console.error(error);
  });
