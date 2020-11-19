var express = require("express");
var http = require("http");
var app = express();
http.createServer(app).listen(3000);

app.use(express.static("./public"));


console.log("Open Url - http://localhost:3000");
 