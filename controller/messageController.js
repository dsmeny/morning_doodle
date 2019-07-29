const Message = require("../model/Message");

exports.getAllMessages = async (req, res) => {
  try {
    let messages = await Message.find({});
    res.status(200).render("index", {
      title: "Morning Doodle",
      messages
    });
  } catch (err) {
    res.status(400).send({
      status: "Error 400: Bad request",
      message: err.message
    });
  }
};

exports.createMessage = async (req, res) => {
  try {
    let message = new Message({
      message: req.body.message
    });

    await message.save();
    res.status(200).redirect("/");
  } catch (err) {
    res.status(400).send({
      status: "Error 400: Bad request",
      message: err.message
    });
  }
};
