const express = require("express");
const Routes = require("./routes/auth");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

mongoose.connect(process.env.MONGO_DB)
  

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", Routes);

app.listen(process.env.PORT, () =>
  console.log(`server running `)
);
