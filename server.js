const http = require('http');
// handle the input and output data from the client and server

function data(req,res){
    res.write("hii");
    res.end();
}

http.createServer((req , res) => {
    res.write("Hello this is mehul bansal");
    res.end();
}).listen(3030);

