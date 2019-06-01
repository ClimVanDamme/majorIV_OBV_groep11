const Character = require("../models/character.model.js");

exports.create = (req, res) => {
  if (!req.body.name) {
    return res.status(500).send({ err: "name can not be empty" });
  }
  if (!req.body.traits) {
    return res.status(500).send({ err: "traits can not be empty" });
  }
  if (!req.body.personality) {
    return res.status(500).send({ err: "personality can not be empty" });
  }
  if (!req.body.story) {
    return res.status(500).send({ err: "story can not be empty" });
  }
  if (!req.body.summary) {
    return res.status(500).send({ err: "summary can not be empty" });
  }
  if (!req.body.quote) {
    return res.status(500).send({ err: "quote can not be empty" });
  }
  if (!req.body.show_id) {
    return res.status(500).send({ err: "show_id can not be empty" });
  }

  const character = new Character({
    name: req.body.name,
    traits: req.body.traits,
    personality: req.body.personality,
    story: req.body.story,
    summary: req.body.summary,
    quote: req.body.quote,
    show_id: req.body.show_id
  });

  character
    .save()
    .then(character => res.send(character))
    .catch(err => {
      res.status(500).send({ error: err.character || "Error" });
    });
};

exports.findAll = async (req, res) => {
  try {
    const characters = await Character.find();
    res.send(characters);
  } catch (err) {
    res.status(500).send({ err: err.character || "Error" });
  }
};

exports.findOne = async (req, res) => {
  try {
    const character = await Character.findOne({
      _id: req.params.characterId
    });
    if (character) {
      res.send(character);
    } else {
      res.status(404).send("No character found");
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
    const character = await character.findOneAndUpdate(
      {
        _id: req.params.characterId
      },
      {
        name: req.body.name,
        traits: req.body.traits,
        personality: req.body.personality,
        story: req.body.story,
        summary: req.body.summary,
        quote: req.body.quote,
        show_id: req.body.show_id
      },
      {
        new: true
      }
    );

    if (!character) {
      return res.status(404).send("No character found");
    }
    res.send(character);
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(417).send("Geen geldig ID");
    }
    return res.status(500).send(err);
  }
};

exports.delete = async (req, res) => {
  try {
    const character = await Character.findOneAndRemove({
      _id: req.params.characterId
    });
    if (!character) {
      return res.status(404).send("No character found");
    }
    res.send(character);
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(417).send("Geen geldig ID");
    }
    return res.status(500).send(err);
  }
};
