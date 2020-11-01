const path = require("path");
const fs = require("fs");

module.exports = JSON.parse(fs.readFileSync(path.join(__dirname, ".eslintrc.json")));
