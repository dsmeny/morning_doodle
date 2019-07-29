const express = require("express");
const router = express.Router();
const messageController = require("../controller/messageController");

let obj = messageController;

// Routes for home page
router
  .route("/")
  .get(obj.getAllMessages)
  .post(obj.createMessage);

module.exports = router;
