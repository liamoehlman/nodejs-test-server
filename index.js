var http = require('http'),
    request = require('request');

if (! process.env.PORT) {
    throw new Error('Port not specified');
}

http.createServer(function (req, res) {
    if (req.url === "/servers") {
        request("http://169.254.169.254/latest/meta-data/instance-id", function(error, response, body) {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end(body);
        })
    } else {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello World\n');
    }
}).listen(process.env.PORT, '0.0.0.0');
console.log('Server running at http://0.0.0.0:' + process.env.PORT);