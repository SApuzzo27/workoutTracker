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

const databaseUrl = "workouts_db";
const collections = ["workouts"];

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true , useFindAndModify : false});

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
    );

    const MongoClient = require('mongodb').MongoClient;
    const uri = "mongodb+srv://samantha:Charlie27@cluster0.jrk69.mongodb.net/workouts_db?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
        const collection = client.db("test").collection("devices");
      // perform actions on the collection object
        client.close();
    });






// Routes
app.use(require("./routes/api"))
app.use(require("./routes/view"))


app.listen(process.env.PORT || 4000, () => {
    console.log("app is listening");
    })

