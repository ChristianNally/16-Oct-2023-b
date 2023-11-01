# W03D03 - HTTP Cookies & User Authentication

### To Do
- [x] HTTP and cookies
- [x] Log user in with email/username and password
- [x] Protecting endpoints against non-logged in users
- [x] Log user out (clearing cookies)
- [x] Register user with email/username and password

### Problem with HTTP
* is a stateless protocol
* neither party is required to remember any previous interactions
* cookies!
* cookie => key/value pair stored in the browser at the request of the server
* browser will automatically send all cookies with each request
* domain-specific localhost:3000 localhost:3001



/urls/new
/urls/:id

email=a%40a.com&password=1234


set => res.cookie(key, value)
read => req.cookies.key
cleared => res.clearCookie(key)



















