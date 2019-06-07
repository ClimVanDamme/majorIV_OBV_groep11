const Show = require("../models/show.model.js");

exports.create = (req, res) => {
  if (!req.body.title) {
    return res.status(500).send({ err: "title can not be empty" });
  }
  if (!req.body.description) {
    return res.status(500).send({ err: "description can not be empty" });
  }
  if (!req.body.date) {
    return res.status(500).send({ err: "date can not be empty" });
  }
  if (!req.body.category) {
    return res.status(500).send({ err: "category can not be empty" });
  }
  if (!req.body.length) {
    return res.status(500).send({ err: "length can not be empty" });
  }

  const show = new Show({
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
    category: req.body.category,
    length: req.body.length
  });

  show
    .save()
    .then(show => res.send(show))
    .catch(err => {
      res.status(500).send({ error: err.show || "Error" });
    });
};

exports.findAll = async (req, res) => {
  try {
    const shows = await Show.find();
    res.send(shows);
  } catch (err) {
    res.status(500).send({ err: err.show || "Error" });
  }
};

exports.findOne = async (req, res) => {
  try {
    const show = await Show.findOne({
      _id: req.params.showId
    });
    if (show) {
      res.send(show);
    } else {
      res.status(404).send("No show found");
    }
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(500).send("Geen geldig ID");
    }
    return res.status(500).send(err);
  }
};

exports.update = async (req, res) => {
  if (!req.body.title) {
    return res.status(400).send("title mag niet leeg zijn");
  }

  try {
    const show = await Show.findOneAndUpdate(
      {
        _id: req.params.showId
      },
      {
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        category: req.body.category,
        length: req.body.length
      },
      {
        new: true
      }
    );

    if (!show) {
      return res.status(404).send("No show found");
    }
    res.send(show);
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(417).send("Geen geldig ID");
    }
    return res.status(500).send(err);
  }
};

exports.delete = async (req, res) => {
  try {
    const show = await Show.findOneAndRemove({
      _id: req.params.showId
    });
    if (!show) {
      return res.status(404).send("No show found");
    }
    res.send(show);
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(417).send("Geen geldig ID");
    }
    return res.status(500).send(err);
  }
};
