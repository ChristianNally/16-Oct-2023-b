// naming things is hard

const a = 42;
console.log(a);

console.log('hello'); // anonymous

const runMyFunc = function(anotherFunc) {
  anotherFunc('carol');
};

const sayHello = function(name) {
  console.log(`hello there ${name}`);
};

runMyFunc(sayHello);

// inline function, anonymous function
runMyFunc(function(name) {
  console.log(`hello there ${name}`);
})


