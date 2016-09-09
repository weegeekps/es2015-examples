// This example demonstrates destructuring.

function sumAndReturnCount(...values) {
    const sum = values.reduce((acc, x) => acc + x);

    return [
        sum,
        values.length
    ];
}

const [totalSum, count] = sumAndReturnCount(10, 20, 30, 40, 50);

console.log(`totalSum: ${totalSum}`); // 150
console.log(`count: ${count}`); // 5
