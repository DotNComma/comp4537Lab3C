const WriteFile = require('./writeFile.js')
const ReadFile = require('./readFile.js')

class Server {
    http;
    url;
    port;
    write;
    read;

    constructor()
    {
        this.http = require('http');
        this.port = 8000;
        this.write = new WriteFile.write()
        this.read = new ReadFile.read()
    }

    run()
    {
        const self = this
        this.http.createServer((req, res) => {
            const url = require('url');
            const urlData = url.parse(req.url, true);
            if(urlData.pathname.startsWith("/write"))
            {
                this.write.run(req, res)
            }
            else if (urlData.pathname.startsWith("/read"))
            {
                this.read.run(req, res)
            }
            else 
            {
                res.writeHead(404);
                res.end("Route not found")
            }
        }).listen(this.port);
    }
}

const server = new Server()
server.run()