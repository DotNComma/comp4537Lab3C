exports.read = class ReadFile {
    fs;

    constructor()
    {
        this.fs = require('fs');
    }

    run(req, res)
    {       
        const url = require('url');
        const urlData = url.parse(req.url, true);
        const pathParts = urlData.pathname.split("/");
        const filename = pathParts[2]

        this.fs.readFile(filename, function (err, data) {
            if (err) 
            {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                return res.end(urlData.pathname + " 404 Not Found!");
            }
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data);
            return res.end();
        });
    }
}
