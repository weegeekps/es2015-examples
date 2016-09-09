// Demonstrates the For...of loop

// Maps are one of the new collection types.
const carColorCounts = new Map([
    ['blue', 10],
    ['green', 21],
    ['red', 4],
    ['yellow', 2],
    ['grey', 53],
    ['black', 47]
]);

console.log('There are the following counts of car colors:\n');

console.log('Color\t\tCount\n-------------------------');
for (const [color, count] of carColorCounts) {
    console.log(`${color}\t\t${count}`);
}
