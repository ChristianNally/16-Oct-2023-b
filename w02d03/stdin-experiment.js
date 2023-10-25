// standard out => stdout => default way our app outputs data
// standard in => stdin => default way we receive information

// console.log(process.stdin);
process.stdin.setEncoding('utf-8');

// read from stdin
process.stdin.on('data', (data) => {
  console.log('someone typed something in:', data);
});

