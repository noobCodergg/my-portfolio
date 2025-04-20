const mongoose = require("mongoose");

const prizeSchema = new mongoose.Schema({
    name:"String",
    status:Boolean
});

module.exports = mongoose.model("prizes", prizeSchema);