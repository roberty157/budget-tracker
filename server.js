//sleepy dawn 2046 on heroku

const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/budgetDB", {
  useNewUrlParser: true,
  useUnifiedTopology:true,
  useCreateIndex:true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));

app.listen(process.env.PORT||3000);