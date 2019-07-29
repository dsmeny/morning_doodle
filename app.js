const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
const messageRoute = require("./routes/message");

// middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Load View engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/static", express.static("public"));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// Routes
app.use("/", messageRoute);

module.exports = app;
