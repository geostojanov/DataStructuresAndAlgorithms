/**
 * Implement a function called, areThereDuplicates which accepts a variable number of arguments, 
 * and checks whether there are any duplicates among the arguments passed in.  You can solve this 
 * using the frequency counter pattern OR the multiple pointers pattern.

 Examples:
    areThereDuplicates(1, 2, 3) // false
    areThereDuplicates(1, 2, 2) // true 
    areThereDuplicates('a', 'b', 'c', 'a') // true 
Restrictions:
Time - O(n)
Space - O(n)

Bonus:
Time - O(n log n)
Space - O(1)

 */

function areThereDuplicates() {
  let lookup = {};

  for(let i = 0; i < arguments.length; i++) {
    if(lookup[arguments[i]]) {
      return true;
    } else {
      lookup[arguments[i]] = 1;
    }
  }
  return false;
}

function areThereDuplicates2() {
  return new Set(arguments).size !== arguments.length;
}


console.log(areThereDuplicates(1,2,3));
