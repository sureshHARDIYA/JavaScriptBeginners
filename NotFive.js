/**
 * You will be given the starting and ending integers of a sequence and should return the
 * number of integers within it which do not contain the digit 5. The start and end numbers
 * should be included!

Examples:

1,9 =>  1,2,3,4,6,7,8,9 → Result 8

4,17 =>  4,6,7,8,9,10,11,12,13,14,16,17 → Result 12

50,60 =>  60 → Result 1

-50,-59 =>  Result 0
The result may contain five.
*/

//The is ES6 syntax with Currying
// What is Currying if you ask, read more here,
// https://www.sitepoint.com/currying-in-functional-javascript/
const notFive = a => F = b => b < a ? 0 : !/5/.test(b) + F(b-1)

console.log(notFive(1)(9))
console.log(notFive(4)(17))
console.log(notFive(50)(60))
console.log(notFive(-50)(-59))
