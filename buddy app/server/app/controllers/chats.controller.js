const Chat = require("../models/chat.model.js");

exports.create = (req, res) => {
  if (!req.body.showId) {
    return res.status(500).send({ err: "show_id can not be empty" });
  }

  if (!req.body.url) {
    return res.status(500).send({ err: "url can not be empty" });
  }

  const chat = new Chat({
    show_id: req.body.showId,
    user_id: req.authUserId,
    url: req.body.url,
    name: req.body.name
  });

  chat
    .save()
    .then(chat => res.send(chat))
    .catch(err => {
      res.status(500).send({ error: err.chat || "Error" });
    });
};

exports.findAll = async (req, res) => {
  try {
    const chats = await Chat.find({ user_id: req.authUserId });
    res.send(chats);
  } catch (err) {
    res.status(500).send({ err: err.chat || "Error" });
  }
};

exports.findOne = async (req, res) => {
  try {
    const chat = await Chat.findOne({
      _id: req.params.chatId,
      user_id: req.authUserId
    });
    if (chat) {
      res.send(chat);
    } else {
      res.status(404).send("No chat found");
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

  if (!req.body.showId) {
    return res.status(400).send("show_id can not be empty");
  }

  if (!req.body.url) {
    return res.status(400).send("url can not be empty");
  }

  try {
    const chat = await chat.findOneAndUpdate(
      {
        _id: req.params.chatId,
        user_id: req.authUserId
      },
      {
        show_id: req.body.show_id,
        url: req.body.url
      },
      {
        new: true
      }
    );

    if (!chat) {
      return res.status(404).send("No chat found");
    }
    res.send(chat);
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(417).send("Geen geldig ID");
    }
    return res.status(500).send(err);
  }
};

exports.delete = async (req, res) => {
  try {
    const chat = await Chat.findOneAndRemove({
      _id: req.params.chatId,
      user_id: req.authUserId
    });
    if (!chat) {
      return res.status(404).send("No chat found");
    }
    res.send(chat);
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(417).send("Geen geldig ID");
    }
    return res.status(500).send(err);
  }
};
