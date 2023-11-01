const express = require('express');
const PORT = 8886;

// config
const app = express();
app.set('view engine', 'ejs');

// middleware
app.use(express.urlencoded({extended: false}));

// routes
app.get('/', (req, res) => {
    const fullname = 'Nally';
    const templateVars = {
        fn: fullname 
    };
    res.render('home', templateVars); // use the view called home.ejs inside the views subdirectory
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.post('/contact', (req, res) => {
    console.log('this is the route that handles contact form submissions');
    console.log('req.body', req.body);
    res.redirect('/');
});

// listen to the correct PORT
app.listen(PORT, () => {
    console.log(`Server is listening to PORT=${PORT}`);
});