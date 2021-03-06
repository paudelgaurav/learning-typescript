type Combinable = number | string

function add(n1: Combinable, n2: Combinable) {
    let result;
    if (typeof (n1) === 'number' && typeof (n2) === 'number') {
        result = +n1 + +n2;
    }
    else {
        result = n1.toString() + n2.toString()
    }
    return result
}

console.log(add(1, 5));
console.log(add('hello', 'world'));