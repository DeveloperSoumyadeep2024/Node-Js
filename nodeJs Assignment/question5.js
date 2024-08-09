// Import the 'path' module
const path = require('path');

// Define a few file paths for demonstration
const filePath = '/user/local/bin/file.txt';
const anotherPath = '/user/local/bin/';
const fileName = 'file.txt';

// 1. Get the directory name of a path
console.log('Directory name:', path.dirname(filePath));

// 2. Get the base name (file name) of a path
console.log('Base name:', path.basename(filePath));

// 3. Get the extension of a file
console.log('File extension:', path.extname(filePath));

// 4. Join multiple path segments into one
const combinedPath = path.join(anotherPath, fileName);
console.log('Joined path:', combinedPath);

// 5. Resolve a sequence of paths into an absolute path
const resolvedPath = path.resolve('..', 'user', 'local', 'bin', 'file.txt');
console.log('Resolved path:', resolvedPath);

// 6. Normalize a path (removes any '..' and '.' segments)
const normalizedPath = path.normalize('/user/../local/./bin/file.txt');
console.log('Normalized path:', normalizedPath);

// 7. Parse a file path into an object
const parsedPath = path.parse(filePath);
console.log('Parsed path:', parsedPath);
