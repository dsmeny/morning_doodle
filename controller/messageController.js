const Message = require("../model/Message");

exports.getAllMessages = async (req, res) => {
  try {
    let messages = await Message.find({});
    res.status(200).render("index", {
      title: "Morning Doodle",
      messages
    });
  } catch (err) {
    console.log(err.captureStackTrace);
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
    console.log(err.captureStackTrace);
  }
};
