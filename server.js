const mongoose = require("mongoose");
const dotenv = require("dotenv");

// MIDDLEWARE
dotenv.config({ path: "./config.env" });
const app = require("./app");

console.log(app.get("env"));

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

// SERVER
mongoose.connect(DB, { useNewUrlParser: true }).then(() => {
  console.log("Now connected to mongoDB");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
