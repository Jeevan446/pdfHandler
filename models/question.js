const mongoose = require("mongoose");
const questionSchema = mongoose.Schema({
  subjectname: String,
  year: String,
  url: String,
});
module.exports = mongoose.model("question", questionSchema);
