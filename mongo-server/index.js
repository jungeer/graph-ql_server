const mongoose = require("mongoose");

const DB_PATH = "mongodb://localhost:27017/test";

function useMongoDB(callback) {
  mongoose.connect(DB_PATH, (err) => {
    if (err) {
      console.error("error", err);
    } else {
      console.log("MongoDB connected success ", DB_PATH);
      callback();
    }
  });
}

module.exports = useMongoDB;
