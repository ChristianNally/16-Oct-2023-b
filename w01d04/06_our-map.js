const ourMap = function(arr, callback) {
  // create an output array
  const output = [];

  // loop through the provided array
  for (let i = 0; i < arr.length; i++) {
    // grab the element using the index (i)
    const element = arr[i];

    // call the provided callback with the element AND capture the return value
    const returnVal = callback(element);

    // put the return value into the output array
    output.push(returnVal);
  }

  // return the output array
  return output;
};

const dogs = ['clifford', 'biggie', 'chia', 'dioji', 'brie', 'silo'];

const doOnEachLoop = function(dog) {
  return `${dog} wants scritches`;
};

const mapped = ourMap(dogs, doOnEachLoop);

console.log(dogs);
console.log();
console.log(mapped);

const builtInMap = dogs.map(doOnEachLoop);

console.log();
console.log(builtInMap);
