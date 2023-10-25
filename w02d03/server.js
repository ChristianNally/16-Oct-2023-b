const net = require('net');

// create the server
const server = net.createServer();

// choose a port
const port = 49007;

// listen for incoming connections - the callback is called once for each new connection
server.on('connection', (connection) => {
  console.log('someone has connected to the server');

  // send a welcome message
  connection.write('welcome to the server');

  // set the encoding on the connection
  connection.setEncoding('utf-8');

  // listen for incoming messages
  connection.on('data', (data) => {
    console.log('client says:', data);
  });
});

// start the server
server.listen(port, () => {
  console.log(`the server is listening on port ${port}`);
});
