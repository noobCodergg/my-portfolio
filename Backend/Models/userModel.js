const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    phone:String,
    email:String,
    result:String,
   
});

module.exports = mongoose.model("users", userSchema);