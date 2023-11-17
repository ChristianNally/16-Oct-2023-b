# W05D05 - Mid-term Project Kickoff

### Expected Outcomes
* real world experience
* working in groups
* communication, team work, and collaboration
* using git/github as a team
* reinforce your current knowledge

### Pick a Project

### User Stories
* describes how a user will interact with the app
* As a _____, I can ____, because _____


* As a logged in user, I can save a resource, because I want to share it with others
* As a logged in user, I can create a map, because I want to share things in my area
* As a non logged in user, I cannot edit the pins on a map, because they don't belong to me

/planning/user-stories.md

### Nouns are resources
* each noun is a table
* make an ERD
* simplest format

/planning/erd.png
/planning/erd-stretch.png

### Routes
* CRUD/BREAD routes for each resource
* REST convention

Browse  GET   /resources
Read    GET   /resources/:id
Edit    POST  /resources/:id
Add     POST  /resources
Delete  POST  /resources/:id/delete

/planning/routes.md

### MVP
* Minimum Viable Product
* @KV Minimum Viable Demo (MVD)
* what is the minimum feature set that we can show off in 5 mins
* if you're not gonna show it, don't build it

### Wireframes/Mockups
* as a team
* lowest fidelity possible

/planning/wireframe.png

### User Login/Registration
* don't do it

```js
// http://localhost:8001/login/5
app.get('/login/:id', (req, res) => {
  // encrypted cookies
  req.session.user_id = req.params.id;

  // plaintext cookies
  res.cookie('user_id', req.params.id);

  // send the user somewhere
  res.redirect('/home');
});
```

### Tech Choices
* Front End: HTML, CSS, JS, jQuery, bootstrap, tailwind
* Back End: Node, Express, Postgres


1. create a .scss file in the styles directory (layout.scss)
2. create a link tag that points to the css version of that file (layout.css)
3. middleware will compile the .scss into .css (layout.scss => layout.css)
4. express static middleware will serve it up

### SPA vs Multi-page (MPA)
* these are not mutually exclusive

### DO NOT CODE ON MASTER/MAIN

### Splitting up the work
* Vertical => each member works on a piece of the FE, BE, and database
* Horizontal => each member working on a different layer (FE, BE, or database)
* Pair programming









