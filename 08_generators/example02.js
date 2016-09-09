// Using a generator to implement a custom iterator.

const myImportantObject = {
    values: ['foo', 'bar', 'foobar']
};

myImportantObject[Symbol.iterator] = function* () {
    for (const value of this.values) {
        yield value;
    }
};

for (const output of myImportantObject) {
    console.log(output);
}
