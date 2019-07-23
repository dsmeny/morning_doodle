const fs = require("fs");
const Message = require("./../models/msgModel");
// const messageView = require("../templates/msgView");

exports.getAllMessages = async (req, res) => {
  try {
    const message = Message.find();
    const output = await message;

    fs.readFile(
      `${__dirname}/../public/template.html`,
      "utf-8",
      (err, data) => {
        let outerHTML = data;
        fs.readFile(
          `${__dirname}/../templates/template-message.html`,
          "utf-8",
          (err, data) => {
            const messageOutput = output
              .map(el => data.replace("<%message%>", el.message))
              .join("");

            let content = outerHTML.replace("<%content%>", messageOutput);

            res.status(200).send(content);
          }
        );
      }
    );
  } catch (err) {
    res.status(400).send({
      status: "Bad request",
      message: "Message not received"
    });
  }
};

// exports.getMessage = async (req, res) => {
//   try {
//     let output;
//     const message = await Message.findById(req.params.id);
//     const result = messageView.stringObject(message);
//     output = messageView.replaceTemplate(template, "<%content%>", result);

//     res.status(200).send(output);
//   } catch (err) {
//     res.status(400).send({
//       status: "Bad request",
//       message: "Message not received"
//     });
//   }
// };

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
