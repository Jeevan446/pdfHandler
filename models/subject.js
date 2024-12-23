const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
  subjectname: String,
});
module.exports = mongoose.model("Subject", subjectSchema);
