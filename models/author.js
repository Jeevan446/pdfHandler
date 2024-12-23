const mongoose = require("mongoose");
const authorSchema = mongoose.Schema({
  subject: String,
  chapterno: Number,
  author: String,
  url: String,
});
module.exports = mongoose.model("author", authorSchema);
