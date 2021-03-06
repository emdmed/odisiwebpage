
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose")
const db_handler =  require("./handlers/db_habdler");

//DB
const remotemongo = "mongodb://admin:sanatorio123@ds054118.mlab.com:54118/labos";
//connect to mongoose
mongoose.connect(remotemongo, {useNewUrlParser: true});

const server = require("http").createServer(app);

app.use(express.static(__dirname + "/client"));

server.listen(process.env.PORT || 3000);
console.log("Server running...")

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//ROUTES

app.get("/", function(req, res){
    res.sendFile(__dirname + "./index.html");
})

app.get("/remote", function(req, res){
    res.sendFile(__dirname + "/client/remote.html");
})

app.get("/test", function(req, res){
    res.sendFile(__dirname + "/client/test.html");
})

app.post("/contact", async function(req, res){
    console.log("request...")
    let data = req.body;
    let success = await db_handler.register(data);
    console.log(success, " Complete..");
    res.status(200).end();
})

app.post("/chat", async function(req, res){
    let data = req.body;
    console.log(data);
    let success = await db_handler.store_chat(data);
    res.status(200).end();
})

app.post("/demo", async function(req, res){
    console.log("demo request...")
    let data = req.body;
    let success = await db_handler.demo(data);
    console.log(success, " Complete..");
    res.status(200).end();
})