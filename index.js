const express = require("express");
const app = express();
require("dotenv").config();
const path = require("path");
const cookieParser=require("cookie-parser");
const bodyParser=require("body-parser");
// Required middlewares
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(cookieParser());
app.use(bodyParser.json());

//requirements from my folders
const staticRouter = require("./routers/staticRouter");
const userRouter = require("./routers/user");
const contentRouter = require("./routers/content");
app.use("/", staticRouter);
app.use("/user", userRouter);
app.use("/content", contentRouter);

//connect database
const connectDb = require("./config/connectDb");
connectDb();
//server start
const PORT = process.env.PORT || 3000;
app.listen(PORT, function (req, res) {
  console.log(`Server is listening at port ${PORT}`);
});
