const fs = require('fs');
const process = require('process');

const args = process.argv.slice(2).join(' ');

fs.readFile(args, 'utf8', (err, data) => {
  if (err) {
    throw err;
  }
  const lineNumber = data.split('\n');
  for (let i = 0; i < lineNumber.length; i += 1) {
    console.log(`${i + 1} : ${lineNumber[i]}`);
  }
});
