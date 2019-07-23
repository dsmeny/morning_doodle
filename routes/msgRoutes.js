const express = require("express");
const msgController = require("./../controllers/msgController");

const router = express.Router();
let obj = msgController;

router
  .route("/")
  .get(obj.getAllMessages)
  .post(obj.createMessage);

// router.route("/:id").get(obj.getMessage);
//   .patch(obj.updateMessage)
//   .delete(obj.deleteMessage);

module.exports = router;
