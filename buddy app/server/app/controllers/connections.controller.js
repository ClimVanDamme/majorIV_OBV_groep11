const Connection = require("../models/connection.model.js");

exports.create = (req, res) => {
  // if (!req.body.user_id) {
  //   return res.status(500).send({ err: "user_id can not be empty" });
  // }
  if (!req.body.characterId) {
    return res.status(500).send({ err: "characterId can not be empty" });
  }
  // if (!req.body.chat_id) {
  //   return res.status(500).send({ err: "chat_id can not be empty" });
  // }
  if (!req.body.showId) {
    return res.status(500).send({ err: "showId can not be empty" });
  }

  if (!req.body.characterSet) {
    return res.status(500).send({ err: "characterSet can not be empty" });
  }

  const connection = new Connection({
    user_id: req.authUserId,
    character_id: req.body.characterId,
    // chat_id: req.body.chat_id,
    show_id: req.body.showId,
    characterSet: req.body.characterSet
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
    const connections = await Connection.find({ user_id: req.authUserId });
    res.send(connections);
  } catch (err) {
    res.status(500).send({ err: err.connection || "Error" });
  }
};

exports.findOne = async (req, res) => {
  try {
    const connection = await Connection.findOne({
      _id: req.params.connectionId,
      user_id: req.authUserId
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

  // if (!req.body.user_id) {
  //   return res.status(400).send("user_id can not be empty");
  // }
  if (!req.body.characterId) {
    return res.status(400).send("character_id can not be empty");
  }
  // if (!req.body.chat_id) {
  //   return res.status(400).send("chat_id can not be empty");
  // }
  if (!req.body.showId) {
    return res.status(400).send("show_id can not be empty");
  }

  if (!req.body.characterSet) {
    return res.status(400).send("characterSet can not be empty");
  }

  try {
    const connection = await Connection.findOneAndUpdate(
      {
        _id: req.params.connectionId,
        user_id: req.authUserId
      },
      {
        user_id: req.authUserId,
        character_id: req.body.characterId,
        show_id: req.body.showId,
        characterSet: req.body.characterSet
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
      _id: req.params.connectionId,
      user_id: req.authUserId
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
