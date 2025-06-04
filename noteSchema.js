var mongoose = require("mongoose");
const { title } = require("process");
var Schema = mongoose.mongoose.Schema;

var note = new Schema({
  title: String,
  date: String,
  note: String,
});

const Data = mongoose.model("Data", note);
module.exports = Data;
