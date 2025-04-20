const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  budget: Number,
  details: {
    type: String,
    default: ""
  },
  status: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("requests", requestSchema);
