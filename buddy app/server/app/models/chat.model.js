const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const ChatSchema = mongoose.Schema(
  {
    show_id: ObjectId,
    user_id: ObjectId,
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Chat", ChatSchema);
