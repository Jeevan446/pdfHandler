const express = require("express");
const router = express.Router();
const isUser=require("../middlewares/isUser");
const isAdmin=require("../middlewares/isAdmin");
const {
  findSubjects,
  findChapters,
  addChapter,
  findAuthors,
  createAuthor,
  addQuestion,
  showQuestions,
  addSyllabus,
  showSyllabus,
  deleteChapter,
  deleteAuthor,
  deletePastquestion,
  deleteOthers
} = require("../controllers/content");

router.get("/subjects", isUser,findSubjects);

router.get("/:subjectname/decision",isUser, (req, res) => {
  res.render("decision");
});
router.get("/:subjectname/decision/chapterwisenote",isUser, findChapters);
router.get("/:subjectname/decision/chapterwisenote/addchapter", isAdmin,(req, res) => {
  return res.render("addchapter",);
});
router.post("/:subjectname/decision/chapterwisenote/addchapter",isAdmin, addChapter);
router.get(
  "/:subjectname/decision/chapterwisenote/:chapterno/author/",isUser,
  findAuthors
);

router.get(
  "/:subjectname/decision/chapterwisenote/:chapterno/author/createauthor",isAdmin,
  (req, res) => {
    return res.render("createauthor");
  }
);
router.post(
  "/:subjectname/decision/chapterwisenote/:chapterno/author/createauthor",isUser,
  createAuthor
);

router.get("/:subjectname/decision/pastquestions",isUser, showQuestions);
router.get("/:subjectname/decision/pastquestions/addquestion",isAdmin, (req, res) => {
  return res.render("addquestion");
});
router.post("/:subjectname/decision/pastquestions/addquestion",isUser, addQuestion);

router.get("/:subjectname/decision/syllabus",isUser, showSyllabus);
router.get("/:subjectname/decision/syllabus/addsyllabus", isAdmin,(req, res) => {
  return res.render("addsyllabus");
});
router.post("/:subjectname/decision/syllabus/addsyllabus", isUser,addSyllabus);


router.get("/deletechapter/:id",isAdmin,deleteChapter);
router.get("/deleteauthor/:id",isAdmin,deleteAuthor);
router.get("/deletepastquestion/:id",isAdmin,deletePastquestion);
router.get("/deleteothers/:id",isAdmin,deleteOthers);
module.exports = router;
