function addUpTo(n) {
    return n * (n + 1) / 2;
}

let t1 = Date.now();
let result = addUpTo(10000000000);
let t2 = Date.now();

console.log(result);
console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds.`);

// test git