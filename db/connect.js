// import mongoose from "mongoose";
const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose
    .connect(url, {
      // useNewUrlParser: true,
      // useCreateIndex: true,
      // useUnifiedTopology: true,
      // useFindAndModify: false,
    })
    .then(() => {
      console.log("Connected to Mongo!");
    })
    .catch((err) => {
      console.error("Error connecting to Mongo", err);
    });
};

module.exports = connectDB;
