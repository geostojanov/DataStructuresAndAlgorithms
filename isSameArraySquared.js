function isSameArraySquared(array1, array2) {
    if(array1.length != array2.length) {
        return false;
    }
    let fc1 = {},
        fc2 = {};
    
    for(let item of array1) {
        fc1[item] = (fc1[item] || 0) + 1;
    }
    for(let item of array2) {
        fc2[item] = (fc2[item] || 0) + 1;
    }
    for(let key in fc1) {
        if (!(key**2 in fc2)) {
            return false;
        }
        if (fc1[key] !== fc2[key**2]) {
            return false;
        }
    }
    return true;
}

console.log(isSameArraySquared([1, 2, 3, 5], [25, 4, 1, 9])); // O(n)