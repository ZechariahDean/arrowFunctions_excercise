// function double(arr) {
//     return arr.map(function(val) {
//       return val * 2;
//     });
//   }

//  my version of the above function
const double = (arr => arr.map(val => val * 2));

// function squareAndFindEvens(numbers){
// var squares = numbers.map(function(num){
//     return num ** 2;
// });
// var evens = squares.filter(function(square){
//     return square % 2 === 0;
// });
// return evens;
// }

// refactered code from above to use arrow functions instead
const squareAndFindEvens = (numbers => numbers.map(num => num ** 2).filter(square => square % 2 === 0));
