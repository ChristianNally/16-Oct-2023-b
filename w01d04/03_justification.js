// single responsiblity principle (SRP) => your code should be responsible for only doing one thing

const loopThroughArray = function(arr, callback) {
  for (const element of arr) {
    // console.log(`you are signed in as ${element}`);
    callback(element, arr); // doOnEachLoop('alice')
  }
};

const names = ['alice', 'bob', 'carol'];

const doOnEachLoop = function(name) {
  console.log(`how are you ${name}???`);
};

loopThroughArray(names, function(name) {
  console.log(`how are you ${name}???`);
});

// loopThroughArray([1,2,3]);
