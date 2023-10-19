// first class functions

// callback => function that you pass to another function to be called by that function
// higher order function (HOF) => function that accepts another function as an argument OR a function that returns a function

const sayHello = function(name) {
  console.log(`hello there ${name}`);
};

const runMyFunc = function(anotherFunc) {
  // console.log('inside runMyFunc');
  // console.log(anotherFunc.toString());

  // sayHello('dean');

  anotherFunc('carol'); // sayHello('carol');
};

runMyFunc(sayHello);
runMyFunc(console.log);
