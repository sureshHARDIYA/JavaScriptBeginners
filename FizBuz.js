/**
 * JavaScript program to display "Fizz" or "Buzz" based on following conditions.
 * if number is divisible by 3 display "Fizz"
 * if number is divisible by 5 display "Buzz"
 * if number is divisible by both 3 and 5 display "FizzBuzz"
 * else display the number
 */

 const fizzBuzzArray = Array.apply(0, Array(100)).map(function (x, y) {
     var nb = y+1;
     var isFizz = ((nb % 3) == 0);
     var isBuzz = ((nb % 5) == 0);
     var isFizzBuzz = (isFizz && isBuzz);

     if (isFizzBuzz) return 'fizzbuzz';
     if (isFizz) return 'fizz';
     if (isBuzz) return 'buzz';
     return(nb);
 }).join('\n');

console.log(fizzBuzzArray)

// Here is another quick solution using ES6 Syntax
//  [...Array(100).keys()].map(i => {
//  let f = !(i % 3), b = !(i % 5);
//  console.log(f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i);
// })
