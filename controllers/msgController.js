const Message = require("./../models/msgModel");
const messageView = require("./../views/msgView");
const template = messageView.template();

exports.getAllMessages = async (req, res) => {
  try {
    let message = await Message.find();
    let result = "";
    let output;

    message.forEach(el => {
      result += messageView.stringObject(el);
      output = messageView.replaceTemplate(template, "<%content%>", result);
    });

    res.status(200).send(output);
  } catch (err) {
    res.status(400).send({
      status: "Bad request",
      message: "Message not received"
    });
  }
};

exports.getMessage = async (req, res) => {
  try {
    let output;
    const message = await Message.findById(req.params.id);
    const result = messageView.stringObject(message);
    output = messageView.replaceTemplate(template, "<%content%>", result);

    res.status(200).send(output);
  } catch (err) {
    res.status(400).send({
      status: "Bad request",
      message: "Message not received"
    });
  }
};

exports.createMessage = async (req, res) => {
  try {
    const message = new Message({
      message: req.body.message
    });
    const output = await message.save();
    res.status(200).send(output);
  } catch (err) {
    res.status(400).send({
      status: "Bad request",
      message: ["Message not received", err]
    });
  }
};
