const mongoose = require("mongoose");
async function connectDb() {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected");
  } catch (err) {
    console.log("Error while connecting db", err);
  }
}
module.exports = connectDb;
