const express = require('express');
const PORT = 8878;

//
// CONFIG
//
const app = express();
app.set('view engine', 'ejs');

//
// MIDDLEWARE
//
app.use(express.urlencoded({extended: false})); // converts form inputs into properties of req.body
app.use((req, res, next)=>{
    console.log(`ROUTE: ${req.method} ${req.url}`);
    next();
});

//
// ROUTES
//

// route for the homepage
app.get('/', (req, res) => {
    console.log('homepage was requested');
    const fullname = 'Monkey Sigmund Fuzz';
    const templateVars = {
        fn: fullname // this will become a variable
    };
    res.render('homepage', templateVars);
});

// route for a form
app.get('/new', (req, res) => {
    res.render('new');
});

app.post('/new', (req, res)=>{
    console.log('req.body', req.body);
    res.redirect('/');    
});

// route for contact page
app.get('/contact', (req, res) => {
    console.log('contact was requested');
    res.write('<h1>contact</h1>');
    res.end();
});

app.get('*', (req, res) => {
    res.write('404');
    res.end();
});

//
// LISTEN EVENT HANDLER
//
app.listen(PORT, () => {
    console.log(`Server is listening on port=${PORT}`);
});