const http = require('http');
const url = require('url');
const fs = require('fs');
const port = process.env.PORT || 8000;

http.createServer(function (req, res) {
    const urlData = url.parse(req.url, true);
    const filename = "." + urlData.pathname;

    fs.readFile(filename, function (err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end(urlData.pathname + " 404 Not Found!");
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(port);