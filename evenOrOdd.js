/**
 * JavaScript program to check weather given number is odd or even
 */

function checkIfOddOrEven(number) {
  if(number % 2 === 0) {
    return "The number is Even"
  } else {
    return "The number is odd"
  }
}

console.log(checkIfOddOrEven(44))
console.log(checkIfOddOrEven(41))
