// Demonstrates default function parameters.

function oldWay(requiredValue, optionalValue) {
    if (!optionalValue) {
        optionalValue = 2;
    }

    return requiredValue + optionalValue;
}

function newWay(requiredValue, optionalValue = 2) {
    return requiredValue + optionalValue;
}

console.log(`Old Way: ${oldWay(3)}`); // 5
console.log(`New Way: ${newWay(3)}`); // 5

// Same value, just less boilerplate.
