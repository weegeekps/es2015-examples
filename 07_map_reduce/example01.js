// Demonstrates Array.prototype.map by reversing a string.

const stringToReverse = '!gnizama si 5102SE';

const reversedString = Array.prototype // We have to use map straight off the prototype for generic uses, such as with a string.
    .map.call(stringToReverse, character => character)
    .reverse()
    .join('');

console.log(reversedString);
