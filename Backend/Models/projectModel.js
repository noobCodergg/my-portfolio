const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  github: String,
  live: String,
  type: String, // Frontend or Fullstack
  technologies: [String],
  images: [String], // base64 strings
})

module.exports = mongoose.model("projects", projectSchema);
