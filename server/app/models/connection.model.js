const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const ConnectionSchema = mongoose.Schema(
  {
    user_id: ObjectId,
    character_id: ObjectId,
    chat_id: ObjectId,
    show_id: ObjectId
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Connection", ConnectionSchema);
