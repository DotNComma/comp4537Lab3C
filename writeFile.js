exports.write = class WriteFile {
    fs;

    constructor()
    {
        this.fs = require('fs');
    }

    run(req, res)
    {
        const url = require('url');
        const urlData = url.parse(req.url, true);
        const urlJson = urlData.query;

        this.fs.appendFile("file.txt", urlJson["text"] + "\n", function (err, data) {
            if (err) 
            {
                res.writeHead(500, { 'Content-Type': 'text/html' });
                return res.end("Failed to write to file");
            } 
            return res.end();
        });
    }
}



