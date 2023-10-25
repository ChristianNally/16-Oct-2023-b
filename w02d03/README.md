# W02D03 - Networking with TCP

### To Do
- [x] Discuss networking and the need for protocols
- [x] TCP introduction
- [x] TCP demo

### What is networking?
- Communication between machines on a network

### What is a protocol?
- A defined standard for how requests and responses are sent between network devices

### Transport Layer Protocols
- Break data into packets to be sent over the network layer
- Give each packet a header with origin and destination
- **UDP**: **U**ser **D**atagram **P**rotocol
  - Smaller header size (8 bytes) which results in smaller packet sizes
  - _Connectionless_ ie. there is no need to establish or maintain a connection
  - No error recovery (any corrupted packets are discarded)
  - Packets can arrive in any order
  - Useful for streaming/low latency applications
- **TCP**: **T**ransmission **C**ontrol **P**rotocol
  - Larger header size (20 bytes)
  - Requires a connection (3-way handshake)
  - Corrupted packets are reported to the server and are re-sent
  - Packets arrive in order
  - Useful when guaranteed communication is needed

### Useful Links
* [OSI Model](https://en.wikipedia.org/wiki/OSI_model)
* [Net package documentation](https://nodejs.org/api/net.html)
