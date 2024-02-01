const http = require("http");
const fs = require("fs");

const myserver = http.createServer((req, res) => {
  if (req.url !== "/favicon.ico") {
    fs.appendFile("log.txt", `${req.url} ${req.method} \n`, (err) => {
      console.log(err);
    });
  }
  switch (req.url) {
    case "/":
      res.end("home page");
      break;
    case "/about":
      res.end("about page");
      break;
    default:
      res.end("error page");
      break;
  }
});

myserver.listen(8000);
