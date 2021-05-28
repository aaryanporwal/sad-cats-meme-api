#! /usr/local/bin/node

const path = require("path");
const fs = require("fs");
const express = require("express");

const app = express();
const mydir = path.join(__dirname, "/public");

app.use(express.static(mydir));
const arr = fs.readdirSync(mydir);

let imgNumber = Math.floor(Math.random() * arr.length);
const filename = arr[imgNumber]; // eg: images(296).jpeg
let imgPath = path.join(__dirname, "/public", filename);

app.get("/", (req, res) => {
  // TODO: Homepage and Metrics 🙈👿

  res.redirect(filename);
});

app.get("/sadge", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  url = `${req.headers.host}/${filename}`;
  res.end(JSON.stringify({ cat: url }));
});

app.get("/copy", (req, res) => {
  // sends new img on each req
  imgNumber = Math.floor(Math.random() * arr.length);
  imgPath = path.join(__dirname, "/public", arr[imgNumber]);
  res.sendFile(imgPath);
});

const port = 6600;
const hostname = "0.0.0.0";

app.listen(port, hostname, () =>
  console.log(`Server running on http://${hostname}:${port}`)
);
