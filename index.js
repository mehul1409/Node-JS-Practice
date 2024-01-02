const app = require('./app');
const colors = require('colors');

console.log('hello'.red);
console.log('world'.green);

// node js is single threaded

console.log("Hii, This is Mehul Bansal");
var a = 10;
var b = 20;

console.log(a+b);
console.log(app.x+app.y);

console.log(app.z());

const arr = [2,3,4,5,6,7,8,9,3];

let result = arr.filter((item)=>{
    return item ===3;
})

console.log(result);
console.log(result);

// node js is a async language

const fs = require('fs');
const path = require('path');

const dirpath = path.join(__dirname,'files');

for(i=0;i<5;i++){
    fs.writeFileSync(dirpath+`/apple${i+1}.txt`,`a simple text file number ${i+1}`);
}

fs.readdir(dirpath,(error,files)=>{
    files.forEach(element => {
        console.log(element);
    });
});


