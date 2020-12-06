const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Translation = new Schema(
  {
    eventid: { type: String, required: true },
    language: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("translations", Translation);
