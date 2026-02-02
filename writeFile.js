const http = require('http');
const url = require('url');
const fs = require('fs');
const port = 8000;

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})

    const urlData = url.parse(req.url, true);
    const urlJson = urlData.query;

    fs.appendFileSync("file.txt", urlJson["text"]);
}).listen(port);