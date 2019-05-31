const mongoose = require("mongoose");

const ShowSchema = mongoose.Schema(
  {
    title: String,
    description: String,
    image: String,
    tag: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Show", ShowSchema);
