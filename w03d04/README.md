# W03D04 - Security & Real World HTTP Servers

### To Do
- [x] Storing passwords
- [x] Encrypted cookies
- [x] HTTP Secure (HTTPS)
- [x] REST
- [x] More HTTP methods
- [x] Method Override [Stretch]

### Hashing
* one way process
* plaintext password => hashing algo (bcrypt) => hash (fasdkhfaklsdhfklahsdklfhaklsdhfa)

* salt => added to the password before hashing

'password' + 'fahksdhfkasdf' => hashing algo => hash

### Encryption
* two way process
* "userId": "abc" => 'sdfhasdklfhalskdhflkahsdf'

plaintext cookie => encryption middleware => encrypted cookie
encrypted cookie => decryption middleware => plaintext cookie


set => res.cookie(key, value) => req.session.key = value
read => req.cookies.key => req.session.key
clear => res.clearCookie(key) => req.session = null



http://localhost:3000/login

Man in the Middle
Monster in the Middle (MitM)

HTTPS => HTTP Secure

### Asymetric Encryption
* it's not the same key that locks and unlocks the data
* private and public key system


https://www.google.com/

### REST
* REpresentational State Transfer
* naming convention for routes
* RESTful conventions

GET /all-the-urls
POST /create-a-new-short-url

Browse  GET   /dinosaurs
Read    GET   /dinosaurs/:id
Edit    POST  /dinosaurs/:id
Add     POST  /dinosaurs
Delete  POST  /dinosaurs/:id/delete

Browse  GET     /dinosaurs
Read    GET     /dinosaurs/:id
Edit    PATCH   /dinosaurs/:id
Add     POST    /dinosaurs
Delete  DELETE  /dinosaurs/:id

### More HTTP Methods
* PUT => replace a resource completely
* PATCH => replace a piece of information
* DELETE => deletes a resource

semantic aliases for POST

const age = 42;

app.patch()

req.method // 'POST'
req.method = 'DELETE'

app.delete()





