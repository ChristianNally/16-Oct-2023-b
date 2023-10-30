const http = require('http');
const PORT = 8787;

const server = http.createServer((req, res) => {
    console.log('a request was received');
    // console.log('req', req);
    console.log('req.url', req.url);
    console.log('req.method', req.method);

    console.log('route', `${req.method} ${req.url}`);


    res.write('<h1>TITLE</h1>');
    res.end();
});

server.listen(PORT, () => {
    console.log(`Server is listening on port=${PORT}`);
});