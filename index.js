#! /home/aaryanporwal/.nvm/versions/node/v14.16.1/bin/node

// const fs = require("fs");
// const mydir = `${__dirname}/src/`;

// fs.readdirSync(mydir).forEach((file) => {
//   console.log(file);
//   fs.writeFileSync(
//     `README.md`,
//     `<p align='center'>
//   <img src="src/${file}" width="200" />
// </p>\n`,
//     {
//       encoding: "utf-8",
//       flag: "a",
//     }
//   );
// });

const express = require("express");
const fs = require("fs");
const app = express();
const ip = require("internal-ip");

const mydir = `${__dirname}/public`;

const arr = fs.readdirSync(mydir);

app.get("/", (req, res) => {
  const imgNumber = Math.floor(Math.random() * arr.length);
  const imgPath = `${__dirname}/public/${arr[imgNumber]}`;
  res.sendFile(`${imgPath}`);
});

app.listen(6900, () => console.log(`Server running on http://localhost:6900`));
app.listen(3900, ip.v4.sync(), () =>
  console.log(`Server running on http://${ip.v4.sync()}:3900`)
);
