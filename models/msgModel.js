const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  message: {
    type: String,
    trim: true
  }
});

const Message = mongoose.model("Message", schema);

module.exports = Message;
