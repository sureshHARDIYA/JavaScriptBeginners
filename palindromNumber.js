/**
 * JavaScript program to check if a given number is palindrome or not. A palindromic number or
 * numeral palindrome is a number that remains the same when its digits are reversed. Like 16461,
 * for example, it is "symmetrical".
 */

function isPalindrome(number) {
  const holderCopy = number
  let reverse = 0
  while ( number > 0) {
    digit = number % 10
    reverse = reverse * 10 + digit

    //why is this step required? What happens if you dont do this step?
    number = parseInt(number / 10, 10)
  }
  return reverse === holderCopy
}

console.log(isPalindrome(16461))
