const mongoose = require("mongoose");

const connectionString = process.env.ATLASDBCONNECTION;

mongoose
  .connect(connectionString)
  .then(() => {
    console.log("MongoDB Connection Successful");
  })
  .catch((err) => {
    console.log("Database Connection Failed!!");
    console.log(err);
  });