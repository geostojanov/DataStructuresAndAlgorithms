function uniqueValues(arr) {
    if(arr.length === 0) {
        return 0;
    }
    let i = 0;
    let j = 1;
    while (j < arr.length) {
        if (arr[i] === arr[j]) {
            //same, move pointer
            j++
        } else {
            //unique, add unique to front
            i++
            arr[i] = arr[j]
        }
    }
    return i+1;
}

console.log(uniqueValues([]));