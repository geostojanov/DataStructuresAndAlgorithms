function isAnagram(string1, string2) {
    if (string1.length != string2.length) {
      return false;
    }
    let lookup = {};
    for(let item of string1) {
      lookup[item] = (lookup[item] || 0) + 1;
    }

    for(let char of string2) {
      if (!(char in lookup)) {
        return false;
      } else {
        lookup[char] -= 1;
      }
    }
    return true;
}

console.log(isAnagram('iceman', 'cinema')); //O(n)