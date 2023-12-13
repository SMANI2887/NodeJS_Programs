const http = require('http');

const app = http.createServer((request, response) => {
    response.writeHead(200,{'Content-Type' : 'text/plain'});
    response.end('Welcome Our NodeJS');
})

app.listen(3001)
console.log('Server is Running : 3001');