// Demonstrates Fat Arrow functions
// Taken from Exploring ES6 https://leanpub.com/exploring-es6/

// Old Method
function Prefixer(prefix) {
    this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function (arr) {
    return arr.map(function (x) {
        return this.prefix + x;
    }.bind(this)); // (A)
};

// New Method
function NewPrefixer(prefix) {
    this.prefix = prefix;
}

NewPrefixer.prototype.prefixArray = function (arr) {
    return arr.map((x) => {
        return this.prefix + x;
    });
};

// Same output:
const ourArray = ['foo', 'bar'];

const oldPrefixer = new Prefixer('old');
console.log(oldPrefixer.prefixArray(ourArray));

const newPrefixer = new Prefixer('new');
console.log(newPrefixer.prefixArray(ourArray));
