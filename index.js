const http = require('http');
const fs = require("fs");

const myserver = http.createServer((req,res)=>{
    const log = `${Date.now()}:Recieved\n`;
    fs.appendFile("log.txt" , log , (err,data)=>{
        res.end('hello this is my first server'); 
    })
});

myserver.listen(8000 , (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('server started');
    }
});

