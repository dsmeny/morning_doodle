const mongoose = require("mongoose");

module.exports.globalErrorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    friendly: "404 bad request error! That will be one demerit for you friend."
  });
};

// model
const Message = mongoose.model(
  "Message",
  new mongoose.Schema({
    message: {
      type: String,
      required: true,
      trim: true,
      max: 1024
    }
  })
);

module.exports = Message;
