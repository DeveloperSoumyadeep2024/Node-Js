const fs = require('fs');

// Read content from input.txt
fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading input.txt:', err);
    return;
  }

  // Write content to output.txt
  fs.writeFile('output.txt', data, 'utf8', (err) => {
    if (err) {
      console.error('Error writing to output.txt:', err);
      return;
    }

    console.log('Content successfully copied from input.txt to output.txt');
  });
});
