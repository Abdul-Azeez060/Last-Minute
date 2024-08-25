require("dotenv").config();
const express = require("express");
const UserRoute = require("./routes/UserRoute");
const DataRoute = require("./routes/DataRoute");
const app = express();

app.use(express.json());

app.use("/users", UserRoute);
app.use("/data", DataRoute);

const PORT = process.env.PORT;
console.log(PORT);

app.listen(PORT, () => {
  console.log("server is listening on port", PORT);
});
