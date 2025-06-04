const { error } = require("console");
const express = require("express");
const mongoose = require("mongoose");

var app = express();
var Data = require("./noteSchema");

mongoose.connect("mongodb://localhost/noteDB");

mongoose.connection
  .once("open", () => {
    console.log("Connected to DB!");
  })
  .on("error", () => {
    console.log("Failed to connect " + error);
  });

app.post("/create", (req, res) => {
  var note = new Data({
    note: req.get("note"),
    title: req.get("title"),
    date: req.get("date"),
  });
  note.save().then(() => {
    if (note.isNew == false) {
      console.log("Save data!");
      res.send("Saved data!");
    } else {
      console.log("Failed to save data");
    }
  });
});

app.get("/getAll", (req, res) => {
  Data.find({}).then((items) => {
    res.send(items);
  });
});

app.post("/delete", async (req, res) => {
  try {
    const result = await Data.findOneAndDelete({
      _id: req.get("id"),
    });

    if (result) {
      console.log("Successfully deleted note");
      res.send("Deleted!");
    } else {
      console.log("Note not found");
      res.status(404).send("Note not found");
    }
  } catch (err) {
    console.log("Failed to delete: " + err);
    res.status(500).send("Failed to delete note: " + err.message);
  }
});

app.post("/update", async (req, res) => {
  try {
    const result = await Data.findOneAndUpdate(
      {
        _id: req.get("id"),
      },
      {
        note: req.get("note"),
        title: req.get("title"),
        date: req.get("date"),
      },
      { new: true }
    );

    if (result) {
      console.log("Successfully updated note");
      res.send("Updated!");
    } else {
      console.log("Note not found for update");
      res.status(404).send("Note not found");
    }
  } catch (err) {
    console.log("Failed to update: " + err);
    res.status(500).send("Failed to update note: " + err.message);
  }
});

var server = app.listen(8081, "192.168.1.15", () => {
  console.log("Server is running!");
});
