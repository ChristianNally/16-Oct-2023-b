const net = require('net');

// create a configuration object
const config = {
  port: 49007,
  host: 'localhost'
};

// create a connection to the server
const connection = net.createConnection(config);

// set the encoding on the connection
connection.setEncoding('utf-8');

// send a message to the server
connection.write('it is nice to be here!');

// listen for incoming data
connection.on('data', (data) => {
  console.log('server says:', data);
});

////////////////////////////////
// Reading from stdin
////////////////////////////////

// set the encoding on stdin
process.stdin.setEncoding('utf-8');

// listen for things typed into the terminal/stdin
process.stdin.on('data', (data) => {
  // send the data to the server
  console.log('data', data);

  // 'a\n' => .trim() => 'a'
  data = data.trim();

  if (data === 'a') {
    connection.write('Move: left');
  }
  if (data === 'w') {
    connection.write('Move: up');
  }
  // connection.write(data);
});
