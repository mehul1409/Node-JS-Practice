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