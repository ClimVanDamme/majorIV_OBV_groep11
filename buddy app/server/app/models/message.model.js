const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const MessageSchema = mongoose.Schema(
  {
    chat_id: ObjectId,
    user_id: ObjectId,
    text: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Message", MessageSchema);
