const mongoose = require("mongoose");

const ShowSchema = mongoose.Schema(
  {
    title: String,
    description: String,
    date: Date,
    category: String,
    length: Number
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Show", ShowSchema);
