// Read from file
const fs = require('fs');
const readLine = require('readline');

const readAndWriteToFile = (path) => {
  const map = {};
  try {
    const rd = readLine.createInterface({
      input: fs.createReadStream(path),
    });
   console.log('Rd', rd);
  
    rd.on('line', (line) => {
      console.log('Line: ', line.split(' '));
      const arr = line.split(' ');
      const host = arr[0];
      if (map[host]) {
        map[host] += 1;
      } else {
        map[host] = 1;
      }
    });
    console.log('Host', map);
  } catch(e) {
    console.log('Err', e);
  }
}

readAndWriteToFile('stream/new.txt');