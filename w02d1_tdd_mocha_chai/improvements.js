const x = 5;

const isNumLessThanComparison = function(num, comparison){

    if (num < comparison) {
        // console.log(`${num} is less than ${comparison}`); 
        return true;
    } 
    return false;
}


console.log('4, 5', isNumLessThanComparison(4, 5) );  // true

console.log('7, 8', isNumLessThanComparison(7, 8));  // true

console.log('7, 6', isNumLessThanComparison(7, 6));  // false



// if (x < 7) { console.log('x is less than seven'); }
// console.log('x is also less than eight');
