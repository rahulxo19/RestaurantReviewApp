const Express = require("express");
const sequelize = require("./utils/database");

const app = Express();

app.get("/", (req, res) => {
  res.send("hello, world");
});

sequelize
  .sync()
  .then(() => {
    app.listen(3000, () => {
      console.log(" Server is running on port 3000");
    });
  })
  .catch((err) => console.log(err));
