const http = require('http');

let note = [
    {
        "id":1,
        "content":"html is mark up lang",
        "important":true
    },
    {
        "id":2,
        "content":"css is style sheet",
        "important":true
    },
    {
        "id":3,
        "content":"JS is scripting lang",
        "important":true
    }
];

const app = http.createServer((request, response) => {
    response.statusCode=200;
    response.setHeader('Content-Type' , 'application/json');
    response.end(JSON.stringify(note));
})

//variable declearation
const PORT=3001;
const HOSTNAME='127.0.0.1';
app.listen(PORT)
console.log(`Server is Running http://${HOSTNAME}:${PORT}`);