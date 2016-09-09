// This demonstrates the block scoping with let & const

function oldAndBusted() {
    var foo = 'foo';

    if (true) {
        var foo = 'bar';
        console.log(foo);
    }

    console.log(foo);
}

console.log('--- Old & Busted ---');
oldAndBusted();

function newHotness() {
    let bar = 'foo';

    if (true) {
        let bar = 'bar'
        console.log(bar);
    }

    console.log(bar);
}

console.log('--- New Hotness ---');
newHotness();
