const http = require('http');

const app = http.createServer((request, response) => {
    response.writeHead(200,{'Content-Type' : 'text/plain'});
    response.end('Welcome Our NodeJS');
})

//variable declearation
const PORT=3001;
const HOSTNAME='127.0.0.1';
app.listen(PORT)
console.log(`Server is Running http://${HOSTNAME}:${PORT}`);