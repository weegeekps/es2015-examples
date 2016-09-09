// Demonstrates generators by calculating fibonacci numbers
// Based on the example in the MDN docs.

function* fibonacci() {
    let num1 = 0;
    let num2 = 1;
    
    for(let i = 0; i < 10; ++i) { // max of 10 iterations.
        const current = num1;
        num1 = num2;
        num2 = current + num1;
        yield current;
    }
}

const sequence = fibonacci();

console.log(sequence.next().value);
console.log(sequence.next().value);

console.log('Now iterating');

// Can also iterate over it.
for (const value of sequence) {
    console.log(value);
}
// YOU MUST HAVE A GUARD INSIDE YOUR GENERATOR TO DO THIS, OR IT WILL
//   INFINITELY ITERATE!!!!
