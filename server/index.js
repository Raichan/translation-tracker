const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const eventRouter = require("./routes/event-router");
const translationRouter = require("./routes/translation-router");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
let connected = " MongoDB not connected.";
connection.once("open", () => {
  connected = " MongoDB database connection established successfully.";
  console.log(connected);
});

connection.on(
  "error",
  console.error.bind(console, "MongoDB connection error:")
);

app.get("/", (req, res) => {
  res.send("Translation tracker server is running!" + connected);
});

app.use("/events", eventRouter);
app.use("/translations", translationRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
