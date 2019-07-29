const mongoose = require("mongoose");

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
