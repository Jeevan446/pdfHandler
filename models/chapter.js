const mongoose = require("mongoose");
const chapterSchema = mongoose.Schema({
  subject: String,
  chapterno: Number,
  chaptername: String,
});

module.exports = mongoose.model("chapter", chapterSchema);
