const subjectModel = require("../models/subject");
const chapterModel = require("../models/chapter");
const authorModel = require("../models/author");
const questionModel = require("../models/question");
const syllabusModel = require("../models/syllabus");
async function findSubjects(req, res) {
  let subjects = await subjectModel.find();
  return res.render("subject", { subjects: subjects });
}

async function findChapters(req, res) {
  let chapters = await chapterModel.find({
    subject: req.params.subjectname,
  });
  return res.render("chapter", { chapters: chapters,doo:req.user});
}
async function addChapter(req, res) {
  await chapterModel.create({
    subject: req.params.subjectname,
    chapterno: req.body.chapterno,
    chaptername: req.body.chaptername,
  });
  return res.redirect("/content/subjects");
}

async function createAuthor(req, res) {
  await authorModel.create({
    subject: req.params.subjectname,
    chapterno: req.params.chapterno,
    author: req.body.author,
    url: req.body.url,
  });
  return res.redirect("/content/subjects");
}
async function findAuthors(req, res) {
  let authors = await authorModel.find({
    subject: req.params.subjectname,
    chapterno: req.params.chapterno,
  });
  return res.render("author", { authors: authors ,user:req.user});
}
async function showQuestions(req, res) {
  let questions = await questionModel.find({
    subjectname: req.params.subjectname,
  });
  return res.render("pastquestions", { questions: questions ,user:req.user});
}
async function addQuestion(req, res) {
  await questionModel.create({
    year: req.body.year,
    url: req.body.url,
    subjectname: req.params.subjectname,
  });
  return res.redirect("/content/subjects");
}
async function addSyllabus(req, res) {
  await syllabusModel.create({
    subjectname: req.params.subjectname,
    url: req.body.url,
    syll: req.body.syll,
  });
  return res.redirect("/content/subjects");
}
async function showSyllabus(req, res) {
  let syllabus = await syllabusModel.find({
    subjectname: req.params.subjectname,
  });
  return res.render("syllabus", { syllabus: syllabus,user:req.user });
}
async function deleteChapter(req,res){
  await chapterModel.findOneAndDelete({
    _id:req.params.id
  })
  return res.redirect("/content/subjects");
}
async function deleteAuthor(req,res){
  await authorModel.findOneAndDelete({
    _id:req.params.id
  })
  return res.redirect("/content/subjects");
}

async function deletePastquestion(req,res){
  await questionModel.findOneAndDelete({
    _id:req.params.id
  })
  return res.redirect("/content/subjects");
}

async function deleteOthers(req,res){
  await syllabusModel.findOneAndDelete({
    _id:req.params.id
  })
  return res.redirect("/content/subjects");
}
module.exports = {
  findSubjects,
  findChapters,
  addChapter,
  createAuthor,
  findAuthors,
  addQuestion,
  showQuestions,
  addSyllabus,
  showSyllabus,
  deleteChapter,
  deleteAuthor,
  deletePastquestion,
  deleteOthers
};
