const express = require('express');
const https = require('http');
const path = require('path');
const { Server } = require('socket.io');

const app = express();
const server = https.createServer(app);
const io = new Server(server);

io.on('connection',(socket)=>{
    socket.on('user-message',message=>{
        io.emit('message',message);
    });
})

app.use(express.static(path.resolve("./public")));

app.get('/', (req, res) => {
    return res.sendFile('./public/index.html')
})

server.listen(8000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`server is stared at port 8000`);
    }
})