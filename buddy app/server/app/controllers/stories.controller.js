const Story = require("../models/story.model.js");

exports.create = (req, res) => {
  if (!req.body.characterId) {
    return res.status(500).send({ err: "characterId can not be empty" });
  }
  if (!req.body.showId) {
    return res.status(500).send({ err: "showId can not be empty" });
  }

  if (!req.body.text) {
    return res.status(500).send({ err: "text can not be empty" });
  }

  const story = new Story({
    user_id: req.authUserId,
    character_id: req.body.characterId,
    show_id: req.body.showId,
    text: req.body.text
  });

  story
    .save()
    .then(story => res.send(story))
    .catch(err => {
      res.status(500).send({ error: err.story || "Error" });
    });
};

exports.findAll = async (req, res) => {
  try {
    const stories = await Story.find({ user_id: req.authUserId });
    res.send(stories);
  } catch (err) {
    res.status(500).send({ err: err.story || "Error" });
  }
};

exports.findOne = async (req, res) => {
  try {
    const story = await Story.findOne({
      _id: req.params.storyId,
      user_id: req.authUserId
    });
    if (story) {
      res.send(story);
    } else {
      res.status(404).send("No story found");
    }
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(500).send("Geen geldig ID");
    }
    return res.status(500).send(err);
  }
};

exports.update = async (req, res) => {
  if (!req.body.character_id) {
    return res.status(400).send("character_id can not be empty");
  }

  if (!req.body.show_id) {
    return res.status(400).send("show_id can not be empty");
  }

  if (!req.body.text) {
    return res.status(400).send("text can not be empty");
  }

  try {
    const story = await story.findOneAndUpdate(
      {
        _id: req.params.storyId,
        user_id: req.authUserId
      },
      {
        user_id: req.authUserId,
        character_id: req.body.character_id,
        show_id: req.body.show_id,
        text: req.body.text
      },
      {
        new: true
      }
    );

    if (!story) {
      return res.status(404).send("No story found");
    }
    res.send(story);
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(417).send("Geen geldig ID");
    }
    return res.status(500).send(err);
  }
};

exports.delete = async (req, res) => {
  try {
    const story = await Story.findOneAndRemove({
      _id: req.params.storyId,
      user_id: req.authUserId
    });
    if (!story) {
      return res.status(404).send("No story found");
    }
    res.send(story);
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(417).send("Geen geldig ID");
    }
    return res.status(500).send(err);
  }
};
