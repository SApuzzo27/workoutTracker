const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const mongojs = require("mongojs");
const path = require("path")
const db = require("./models");

const app = express();

const PORT = 4000;

app.use(logger("dev"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"));


const uri = process.env.MONGODB_URI;
const databaseUrl = "workouts_db";
const collections = ["workouts"];

mongoose.connect(uri || "mongodb://localhost/workouts_db", { useNewUrlParser: true , useFindAndModify : false});




// Routes
app.use(require("./routes/api"))
app.use(require("./routes/view"))


app.listen(process.env.PORT || 4000, () => {
    console.log("app is listening on localhost:4000");
    })

