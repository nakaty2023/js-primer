import * as util from "node:util";
import * as fs from "node:fs/promises";

const { positionals } = util.parseArgs({
    allowPositionals: true
});
const filePath = positionals[0];
fs.readFile(filePath, { encoding: "utf8" }).then(file => {
    console.log(file);
}).catch(err => {
    console.error(err.message);
    process.exit(1);
});
