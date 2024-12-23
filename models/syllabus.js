const mongoose = require("mongoose");
const syllabusSchema = mongoose.Schema({
  subjectname: String,
  url: String,
  syll: String,
});
module.exports = mongoose.model("syllabus", syllabusSchema);
