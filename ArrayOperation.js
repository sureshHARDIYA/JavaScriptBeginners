/**
* Array operations
**/

const feelings = ['love', 'hate'];

//add an item to end of the array
// ['love', 'hate', 'sad']
feelings.push('sad');

//remove an from end of the array
// ['love', 'hate']
feelings.pop();

//add an item at the beginning of the array
// ['lust', 'love', 'hate']
feelings.unshift('lust');

//remove an item from the beginning of the array
// ['love', 'hate']
feelings.shift()

//find index of an item in the array
const index = feelings.indexOf('hate')

//remove an item from index position
feelings.push('sad');
feelings.push('lust');
feelings.push('angry');
//remove index 2, and remove 1 item from that posistion
//["love", "hate", "lust", "angry"]
feelings.splice(2, 1)

//copy an array
//["love", "hate", "lust", "angry"]
const feelingCopy = feelings.slice()

console.log(feelingCopy);
