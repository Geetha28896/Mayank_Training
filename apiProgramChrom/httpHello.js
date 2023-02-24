const express = require("express");
const process = require("process");
const fs = require("fs");
const http = require("http");
const https=require('https')
const { response } = require("express");

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"

//const app=express()
//const port=5000;
//Using express module************
/*
app.get('/',(req,res)=>{
//console.log("Hello")
debugger;
    res.send("Hello World")
});
*/

//use http request
var server = http.createServer();
server.on("request", (req, res) => {
  try {
    if (req.url === "/") {
      fs.readFile(__dirname + "/index.html", (err, data) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });
    } else if (req.url === "/home") {
      fs.readFile(__dirname + "/home.html", (err, data) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });
    }else if(req.url==="/externalapi"){
      https.get("https://reqres.in/api/users", (responseStream) => {
        var dataResponse = "";
        responseStream.on("data", (data) => {
            dataResponse+=data;
        });
        responseStream.on("end", () => {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(dataResponse);
          res.end();
        });
      });
    } 
  } catch (e) {
    console.log(e);
  }
});

server.listen(process.env.Port, () => {
  console.log("Server running On Port 5000 " );
});
