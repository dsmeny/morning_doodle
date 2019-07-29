const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();

// middleware

// Error handlers
const AppError = require("./utils/appError");
const globalErrorHandler = require("./model/Message");
const messageRoute = require("./routes/message");

//Environment variables || config vars
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Load View engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/static", express.static("public"));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// Routes
app.use("/", messageRoute);

// POST-Middleware
app.use("*", (req, res, next) => {
  if (req.originalUrl === "/favicon.ico") {
    res.status(204).json({ nope: true });
  } else {
    next();
  }
});

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`), 404);
});

app.use(globalErrorHandler);

module.exports = app;
