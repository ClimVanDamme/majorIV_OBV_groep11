const Show = require("../models/show.model.js");

exports.create = (req, res) => {
  if (!req.body.title) {
    return res.status(500).send({ err: "title can not be empty" });
  }

  const show = new Show({
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
    tag: req.body.tag
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
        image: req.body.image,
        tag: req.body.tag
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
