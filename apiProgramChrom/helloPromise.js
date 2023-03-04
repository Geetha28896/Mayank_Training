const { rejects } = require("assert");
const express = require("express");
const fs = require("fs");
const { resolve } = require("path");
const app = express();

app
  .get("/", (req, res) => {
    const promise = new Promise((resolve, rejects) => {
      fs.readFile("./employee.json", (err, data) => {
        resolve(data);
      });
    });

    promise.then((data) => {
      res.write(data);
      res.end();
    });
  })
  .listen(8008);
