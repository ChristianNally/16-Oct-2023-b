
// const voter1Name = 'Bobbie';
// const voter1Age = 44;
// const voter1DidVote = true;

// const voter2Name = 'Sandra';
// const voter23DidVote = false;

// const voter3DidVote = true;

const everyoneDidVote = true;
const displayHelper = function () {
  console.log(`Name: ${this.name}, Age: ${this.age}, didVote: ${this.didVote} !!!`);
};

const voter1 = {
  name: 'Bobbie',
  age: 44,
  didVote: everyoneDidVote,
};

const voter2 = {
  name: 'Sandra',
  age: null,
  didVote: everyoneDidVote,
};

const voter3 = {
  name: 'Monkey Fuzz',
  age: 44,
  didVote: everyoneDidVote,
};

const arrayOfVoters = [voter1, voter2, voter3];
for (let voter of arrayOfVoters){
  voter.display = displayHelper;
}


// let totalVote = 0;

// for (let voter of arrayOfVoters){
//     if (voter.didVote) {
//         totalVote = totalVote + 1; // totalVote++    ++totalVote    
//     }
// }

// console.log('total number of votes', totalVote);
// console.log('typeof total number of votes', typeof totalVote);


// console.log('arrayOfVoters.length', arrayOfVoters.length);


// if (voter1DidVote) {
//     totalVote = totalVote + 1;
// }

// if (voter2DidVote) {
//     totalVote = totalVote + 1;
// }

// if (voter3DidVote) {
//     totalVote = totalVote + 1;
// }


const property = 'didVote';

console.log('voter1.name', voter1.name); // dot notation
console.log('voter1.property', voter1.property); // invalid dot notation
console.log('typeof voter1.property', typeof voter1.property); // invalid dot notation


console.log('voter1["name"]', voter1["name"]); // square bracket notation
console.log('voter1[property]', voter1[property]); // square bracket notation

// console.log('Monkey Fuzz');

// console.log('console', console);

// let modifiable = 43;

// console.log('modifiable before', modifiable);

// function modifyAParameter(num) {
//   num = num + 5;
//   console.log('num', num);
//   return num;
// }

// const returnValue = modifyAParameter(modifiable);
// console.log('modifyAParameter(modifiable)', modifyAParameter(modifiable));
// console.log('returnValue', returnValue);
// console.log('modifiable after', modifiable);
// // console.log('num', num); // undefined


// console.log('voter1 before', voter1);


// function modifyAnObjectParameter(object) {
//   console.log('object before', object);
//   object.didVote = !object.didVote;
//   console.log('object after', object);
// }

// modifyAnObjectParameter(voter1);

// console.log('voter1 after', voter1);

// console.log('voter1.display()', voter1.display());


for (let voter of arrayOfVoters){
  voter.display();
}
