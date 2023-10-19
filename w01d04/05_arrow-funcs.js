// arrow funcs were added in ES6 in 2015 (coffeescript)
// advantages of arrow functions:
// 1. no function keyword!!!
// 2. if only one argument, no need for parens
// 3. if only one line of code, no need for curly braces
// 4. if no curly braces, the line of code is implicitly returned
// 5. arrow functions do not create `this`

// implicit -> we don't ask for it to happen
// explicit -> we ask for it to happen


const sayHello1 = function(name) {
  return `hello there ${name}`;
};

const sayHello2 = name => `hello there ${name}`;

myHigherOrderFunc(function(name) {
  return `hello there ${name}`;
})

myHigherOrderFunc(name => `hello there ${name}`)

const returnVal = sayHello2('carol');

console.log('returnVal', returnVal);

