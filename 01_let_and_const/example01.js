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
    let foo = 'foo';

    if (true) {
        let foo = 'bar'
        console.log(foo);
    }

    console.log(foo);
}

console.log('--- New Hotness ---');
newHotness();
