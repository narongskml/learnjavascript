const fs = require('node:fs');
const data = fs.readFileSync('file.md','utf8'); // blocks
console.log(data);

console.log('blocking-io');