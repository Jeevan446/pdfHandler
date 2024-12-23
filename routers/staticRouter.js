const isUser = require("../middlewares/isUser");
const isAdmin=require("../middlewares/isAdmin")
const express = require("express");
const router = express.Router();

router.get("/user/login", (req, res) => {
    return res.render("login");
});

router.get("/",isUser, (req, res) => {
    return res.redirect("/content/subjects");
});

router.get("/user/signup",isAdmin, (req, res) => {
    return res.render("signup");
});

module.exports = router;
