const fs = require('node:fs');
fs.readFile('file.md','utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

console.log('non-blocking-io');