const mongoose = require("mongoose");

//SCHEMA

var Contact= mongoose.Schema({
nombre: {type: String, required: true},
email: {type: String, required: true},
empresa : {type: String, required: true},
plan : {type: String, required: true},
date: {type: Date, required: true},
});

var Contact = module.exports = mongoose.model("Odisi2020Contact", Contact);
        