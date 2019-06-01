const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const CharacterSchema = mongoose.Schema(
  {
    name: String,
    traits: Array,
    personality: String,
    story: String,
    summary: Array,
    quote: String,
    show_id: ObjectId
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Character", CharacterSchema);
