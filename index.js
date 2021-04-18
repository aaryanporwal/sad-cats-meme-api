#! /home/aaryanporwal/.nvm/versions/node/v14.16.1/bin/node

const fs = require("fs");
const mydir = `${__dirname}/src/`;

fs.readdirSync(mydir).forEach((file) => {
  console.log(file);
  fs.writeFileSync(`README.md`, `<img src="src/${file}" width="200"/>\n`, {
    encoding: "utf-8",
    flag: "a",
  });
});
