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

nestServer.get("/", (req, res) => {
  res.send("UserPortal Backend Running");
});

nestServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});