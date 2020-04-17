const mongoose = require("mongoose");

//SCHEMA

var Chat= mongoose.Schema({
email: {type: String, required: true},
messages: {type: Array, required: true}
});

var Chat = module.exports = mongoose.model("Odisi2020Chat", Chat);
        