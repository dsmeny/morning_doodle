const express = require("express");
const morgan = require("morgan");
const app = express();

const msgRouter = require("./routes/msgRoutes");

// middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// Routes
app.use("/", msgRouter);

module.exports = app;
