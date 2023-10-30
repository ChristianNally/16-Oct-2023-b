const http = require('http');
const PORT = 8889;


const server = http.createServer((req, res) => {
    console.log('a request has been made');
    // console.log('req.url', req.url);
    // console.log('req.method', req.method);

    const route = `${req.method} ${req.url}`;
    console.log('route', route);

    switch(route){
        case 'GET /':
            res.write('homepage');
            res.write('homepage1');
            res.write('homepage2');
            res.end();
        break;

        case 'GET /contact':
            res.write('contact us');
            res.end();
        break;

        default:
        break;
    }

});


server.listen(PORT, () => {
    console.log(`Server is listening to port ${PORT}`);
});