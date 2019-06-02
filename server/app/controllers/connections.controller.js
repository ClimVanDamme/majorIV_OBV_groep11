const Connection = require("../models/connection.model.js");

exports.create = (req, res) => {
  if (!req.body.user_id) {
    return res.status(500).send({ err: "user_id can not be empty" });
  }
  if (!req.body.character_id) {
    return res.status(500).send({ err: "character_id can not be empty" });
  }
  if (!req.body.chat_id) {
    return res.status(500).send({ err: "chat_id can not be empty" });
  }
  if (!req.body.show_id) {
    return res.status(500).send({ err: "show_id can not be empty" });
  }

  const connection = new Connection({
    user_id: req.body.user_id,
    character_id: req.body.character_id,
    chat_id: req.body.chat_id,
    show_id: req.body.show_id
  });

  connection
    .save()
    .then(connection => res.send(connection))
    .catch(err => {
      res.status(500).send({ error: err.connection || "Error" });
    });
};

exports.findAll = async (req, res) => {
  try {
    const connections = await Connection.find();
    res.send(connections);
  } catch (err) {
    res.status(500).send({ err: err.connection || "Error" });
  }
};

exports.findOne = async (req, res) => {
  try {
    const connection = await Connection.findOne({
      _id: req.params.connectionId
    });
    if (connection) {
      res.send(connection);
    } else {
      res.status(404).send("No connection found");
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

  if (!req.body.user_id) {
    return res.status(400).send("user_id can not be empty");
  }
  if (!req.body.character_id) {
    return res.status(400).send("character_id can not be empty");
  }
  if (!req.body.chat_id) {
    return res.status(400).send("chat_id can not be empty");
  }
  if (!req.body.show_id) {
    return res.status(400).send("show_id can not be empty");
  }

  try {
    const connection = await connection.findOneAndUpdate(
      {
        _id: req.params.connectionId
      },
      {
        user_id: req.body.user_id,
        character_id: req.body.character_id,
        chat_id: req.body.chat_id,
        show_id: req.body.show_id
      },
      {
        new: true
      }
    );

    if (!connection) {
      return res.status(404).send("No connection found");
    }
    res.send(connection);
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(417).send("Geen geldig ID");
    }
    return res.status(500).send(err);
  }
};

exports.delete = async (req, res) => {
  try {
    const connection = await Connection.findOneAndRemove({
      _id: req.params.connectionId
    });
    if (!connection) {
      return res.status(404).send("No connection found");
    }
    res.send(connection);
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(417).send("Geen geldig ID");
    }
    return res.status(500).send(err);
  }
};
