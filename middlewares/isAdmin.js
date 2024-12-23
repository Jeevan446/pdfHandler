const jwt = require("jsonwebtoken");
const userModel = require("../models/user");

async function isAdmin(req, res, next) {
    const token = req.cookies.token;
    if (!token) {
      return res.redirect("/user/login");  
    }
  
    try {
      const verifyToken = jwt.verify(token, process.env.JWT_KEY); 
      const user = await userModel.findOne({ email: verifyToken.email });
      if (!user) {
        return res.redirect("/user/login");  
      }
      if(user.role!=="admin"){
        return res.redirect("/user/login");  
      }
      req.user = user;  
      next();  
    } catch (err) {
      console.error(err); 
      return res.redirect("/user/login");  
    }
  }
  module.exports=isAdmin