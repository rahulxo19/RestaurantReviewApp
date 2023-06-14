// Fetch the restaurant data from the backend
axios
  .get("http://localhost:3000/restaurants/admin")
  .then((response) => {
    const restaurants = response.data;
    console.log(response);

    // Get the reference to the table body element
    const tableBody = document.querySelector("#restaurant-table tbody");

    // Iterate over the restaurants and create table rows dynamically
    restaurants.forEach((restaurant) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${restaurant.id}</td>
        <td>${restaurant.name}</td>
        <td>${restaurant.totalReviews}</td>
      `;

      tableBody.appendChild(row);
    });
  })
  .catch((error) => {
    console.error(error);
  });
