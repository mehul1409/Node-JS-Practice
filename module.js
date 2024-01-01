const fs = require('fs');

fs.writeFileSync("hello.txt","this function is used to write in file");

fs.writeFileSync("hello.txt","second statement");

console.log(__dirname);
console.log(__filename);