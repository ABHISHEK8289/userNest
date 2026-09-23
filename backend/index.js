require("dotenv").config();

const express = require("express");
const cors = require("cors");
const router = require("./routes/router");
require("./config/db");

const nestServer = express();

nestServer.use(cors());
nestServer.use(express.json());
nestServer.use("/api", router);

const PORT = process.env.PORT || 3000;
nestServer.listen(PORT, () => {
  console.log("nestServer Started...... And Waiting for Client Request");
});

nestServer.get("/", (req, res) => {
  res.status(200).send("<h1>nestServer Started......</h1>");
});