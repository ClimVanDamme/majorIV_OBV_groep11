const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const StorySchema = mongoose.Schema(
  {
    user_id: ObjectId,
    character_id: ObjectId,
    show_id: ObjectId,
    text: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Story", StorySchema);
