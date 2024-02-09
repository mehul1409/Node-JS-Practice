const express = require('express')
const fs = require('fs');
const status = require('express-status-monitor');
const zlib = require('zlib');

const app = express();

app.use(status());

fs.createReadStream('./sample.txt').pipe(zlib.createGzip().pipe(fs.createWriteStream('./sample.zip')));

//streaming

app.get('/', (req, res) => {
    const stream = fs.createReadStream('./sample.txt', "utf-8");
    stream.on('data', (chunk) => {
        res.write(chunk);
    })
    stream.on('end', () => { res.end() });
})

app.listen(8000, () => { console.log(`server starterd`) });

