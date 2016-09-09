// Demonstrates the rest parameter syntax in JavaScript.
// WARNING: Not to be confused with the networking concept!

function multiplyAllNumbers(...allNumbers) {
    return allNumbers.reduce((accumulator, value) => accumulator * value);
}

console.log(multiplyAllNumbers(3, 4, 5));
