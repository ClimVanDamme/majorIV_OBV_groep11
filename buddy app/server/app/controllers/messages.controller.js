const Message = require("../models/message.model.js");

exports.create = (req, res) => {
  if (!req.body.chat_id) {
    return res.status(500).send({ err: "chat_id can not be empty" });
  }
  if (!req.body.user_id) {
    return res.status(500).send({ err: "user_id can not be empty" });
  }
  if (!req.body.text) {
    return res.status(500).send({ err: "text can not be empty" });
  }

  const message = new Message({
    chat_id: req.body.chat_id,
    user_id: req.body.user_id,
    text: req.body.text
  });

  message
    .save()
    .then(message => res.send(message))
    .catch(err => {
      res.status(500).send({ error: err.message || "Error" });
    });
};

exports.findAll = async (req, res) => {
  try {
    const messages = await Message.find();
    res.send(messages);
  } catch (err) {
    res.status(500).send({ err: err.message || "Error" });
  }
};

exports.findOne = async (req, res) => {
  try {
    const message = await Message.findOne({
      _id: req.params.messageId
    });
    if (message) {
      res.send(message);
    } else {
      res.status(404).send("No message found");
    }
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(500).send("Geen geldig ID");
    }
    return res.status(500).send(err);
  }
};

exports.update = async (req, res) => {
  //   if (!req.body.title) {
  //     return res.status(400).send("title mag niet leeg zijn");
  //   }

  if (!req.body.chat_id) {
    return res.status(400).send("chat_id can not be empty");
  }
  if (!req.body.user_id) {
    return res.status(400).send("user_id can not be empty");
  }
  if (!req.body.text) {
    return res.status(400).send("text can not be empty");
  }

  try {
    const message = await message.findOneAndUpdate(
      {
        _id: req.params.messageId
      },
      {
        chat_id: req.body.chat_id,
        user_id: req.body.user_id,
        text: req.body.text
      },
      {
        new: true
      }
    );

    if (!message) {
      return res.status(404).send("No message found");
    }
    res.send(message);
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(417).send("Geen geldig ID");
    }
    return res.status(500).send(err);
  }
};

exports.delete = async (req, res) => {
  try {
    const message = await Message.findOneAndRemove({
      _id: req.params.messageId
    });
    if (!message) {
      return res.status(404).send("No message found");
    }
    res.send(message);
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(417).send("Geen geldig ID");
    }
    return res.status(500).send(err);
  }
};
