import fs from "fs";
import path from "path";

const config = fs.readFileSync(path.join(__dirname, "../.eslintrc")).toString();

export = JSON.parse(config);
