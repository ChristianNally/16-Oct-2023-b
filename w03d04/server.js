const express = require('express');
const morgan = require('morgan');
// const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bcrypt = require('bcryptjs');

const app = express();
const port = 3000;

// user database
const users = {
  abc: {
    id: "abc",
    email: "a@a.com",
    password: "$2a$10$ou75zSr1zWuppLIrCuJbu.Q9nlvpZ0MLNX.i6JxROOvA9etFajgma",
  },
  def: {
    id: "def",
    email: "b@b.com",
    password: "$2a$10$ou75zSr1zWuppLIrCuJbu.Q9nlvpZ0MLNX.i6JxROOvA9etFajgma",
  },
};

// configuration
app.set('view engine', 'ejs');

// middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false })); // creates req.body
// app.use(cookieParser()); // creates req.cookies
app.use(cookieSession({
  name: 'whatever',
  keys: ['faklsdhfklahsdklf'],
}));

// GET /login
app.get('/login', (req, res) => {
  res.render('login');
});

// POST /login
app.post('/login', (req, res) => {
  // grab the email and password from the body
  const email = req.body.email;
  const password = req.body.password;

  // did they NOT give us an email and password?
  if (!email || !password) {
    return res.status(400).send('Please provide an email AND password');
  }

  // look up the user based on their email
  let foundUser = null;

  for (const userId in users) {
    const user = users[userId];
    if (user.email === email) {
      // we found our user!!
      foundUser = user;
    }
  }

  // did we NOT find a user?
  if (!foundUser) {
    return res.status(400).send('no user with that email found');
  }

  // do the passwords NOT match?
  const result = bcrypt.compareSync(password, foundUser.password);
  // if (foundUser.password !== password) {
  if (!result) {
    return res.status(400).send('passwords do not match');
  }

  // hooray! the user is who they say they are!

  // set the cookie (log the user in)
  // res.cookie('userId', foundUser.id);
  req.session.userId = foundUser.id;

  // send the user somewhere
  res.redirect('/protected');
});

// GET /protected
app.get('/protected', (req, res) => {
  // grab the userId from the cookies
  // const userId = req.cookies.userId;
  const userId = req.session.userId;

  // do they NOT have a cookie?
  if (!userId || !users[userId]) {
    return res.status(401).send('you must be logged in to see this page');
  }

  // lookup the user based on their id
  const user = users[userId];

  const templateVars = {
    email: user.email
  };

  // render the protected page
  res.render('protected', templateVars);
});

// GET /register
app.get('/register', (req, res) => {
  res.render('register');
});

// POST /register
app.post('/register', (req, res) => {
  // grab the email and password from the body
  const email = req.body.email;
  const password = req.body.password;

  // did they NOT give us an email and password?
  if (!email || !password) {
    return res.status(400).send('Please provide an email AND password');
  }

  // lookup the user based on their email
  let foundUser = null;

  for (const userId in users) {
    const user = users[userId];
    if (user.email === email) {
      // we found a duplicate!
      foundUser = user;
    }
  }

  // did we find a user?
  if (foundUser) {
    return res.status(400).send('a user with that email is already registered');
  }

  // the email is unique

  // create a new user object
  const id = Math.random().toString(36).substring(2, 5); // random 3 character string

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  const user = {
    id: id,
    email: email,
    password: hash
  };

  // update the users database
  users[id] = user;
  console.log(users);

  // res.cookie('userId', user.id);

  // send the user to the login page to try out their new credentials
  res.redirect('/login');
});

// POST /logout
app.post('/logout', (req, res) => {
  // clear the cookie
  // res.clearCookie('userId');
  // req.session.userId = null; // { userId: null }
  req.session = null; // clear all cookies

  // redirect the user
  res.redirect('/login');
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
