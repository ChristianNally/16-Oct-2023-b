# W02D03 - Networking with TCP

### To Do
- [x] Discuss networking and the need for protocols
- [x] TCP introduction
- [x] TCP demo

### Networking
* two computers talking to each other

* servers => have information
* clients => want information

2nd house on the left
postal code
street address
apt number

2^8

### Internet Protocol (IP)
* IP address (street number)
  * IPv4 192.168.0.0 127.0.0.1
  * IPv6 2001:db8:3333:4444:5555:6666:7777:8888
* Port (apt number)
  * 65,535 ports to choose from
  * 80 HTTP
  * 443 HTTPS
  * 22 SSH
  * 5432 Postgres
  * 3000 - 8000 dev ports

### Packets
* all data is broken into packets
* header => who sent it and where is it going

### Transmission Control Protocol (TCP)
* header size is larger
* requires a connection (triple handshake)
* packet loss detection 1/500 2/500 missing packets are re-sent
* packets are guaranteed to arrive in order

### User Datagram Protocol (UDP)
* header is smaller
* connectionless
* missing packets are gone
* packets can arrive in any order


lodash

jQuery $

const _ = require('lotide')
_.middle


### Event-Driven Development
* program against events happenning
  * someone connected to the server
  * someone disconnected
  * someone sent a message

button.addEventListener('click', () => {});


'Move: up'
'Move: down'

'move down'






