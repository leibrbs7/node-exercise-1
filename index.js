const fs = require('fs')
const process = require('process');

const fileExist = process.argv[2]
const secArg = process.argv[3]
const choice = process.argv[4]
const output = ''

if (fileExist === undefined) {
  process.stdin.on("data", data => {
    data = data.toString()
    const lineNumber = data.split('\n');
    for (let i = 0; i < lineNumber.length; i += 1) {
      console.log(`${i + 1} : ${lineNumber[i]}`);
    }
  })

} else if (secArg === undefined) {
  console.log('Second argument is required.')
} else if (fileExist) {
  fs.readFile(fileExist, 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
  const lineNumber = data.split('\n');
  for (let i = 0; i < lineNumber.length; i += 1) {
    console.log(`${i + 1} : ${lineNumber[i]}`);
  }
  })
}
if (fs.existsSync(secArg)){
  if (choice !== undefined && choice !== '-n' && choice !== '-y') {
    console.log('That is not a valid argument! (Expected -n, -y or undefined)')
  } else if (choice === '-y') {
      try {
        fs.writeFileSync(secArg, output)
      } catch (err) {
          console.log('!!! Error: Problem in creating a file.')
      }
  } else if (choice === '-n' || choice == null) {
    console.log('File not overwritten.')
  } else {
    try {
      fs.writeFileSync(secArg, output)
    } catch (err) {
      console.log('!!! Error: Problem in Creating File')
    }
    }
}