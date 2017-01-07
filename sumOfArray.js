/**
 * JavaScript program to find sum of Array. There are several ways to do this. One of the handy way
 * is to use reduce function.
 * `reduce` takes two arguments, callback and initialValues.
 * callback in turn takes four arguments, accumulator, currentValue, currentIndex and array.
 * 
 */

 function sumOfArray(numbersArray) {
   return numbersArray.reduce((accumulator, currentValue, currentIndex, numbersArray) => accumulator + currentValue, 0)
 }

 const test = [0, 1, 2, 10, 20]
 console.log(sumOfArray(test))
