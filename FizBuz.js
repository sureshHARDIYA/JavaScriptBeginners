/**
 * JavaScript program to display "Fizz" or "Buzz" based on following conditions.
 *
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
 });

 fizzBuzzArray.forEach(item => console.log(`${item} \n`))

// Here is another quick solution using ES6 Syntax
//  [...Array(100).keys()].map(i => {
//  let f = !(i % 3), b = !(i % 5);
//  console.log(f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i);
// })
