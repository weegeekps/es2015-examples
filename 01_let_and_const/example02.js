// This demonstrates const.

try {
    const foo = 'foo';
    foo = 'bar'; // Throws an error!
    console.log(foo);
} catch (error) {
    console.log(error);
}

console.log(); // Spacing

try {
    const bar = 'bar';
    bar += 'bar'; // Also throws an error!
    console.log(bar);
} catch (error) {
    console.log(error);
}

console.log(); // Spacing

// Does not make objects immutable!!!

try {
    const foobar = { myValue: 'foobar' }
    foobar.myValue = 'barfoo';
    console.log(foobar.myValue);
} catch (error) {
    console.log(error);
}
