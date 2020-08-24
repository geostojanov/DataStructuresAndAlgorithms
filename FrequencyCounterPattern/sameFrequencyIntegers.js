/* Write a function called sameFrequency. Given two positive integers, find out if the two numberrs have the same frequency of digits.
   Your solution MUST have the following complexities:
   Time: O(n)
   
   Sample Input:
   sameFrequency(182, 281) -> true
   sameFrequency(34, 14) -> false
   sameFrequency(3589578, 5879385) -> true
   sameFrequency(22, 222) -> false
*/

function sameFrequency(int1, int2) {
  if(int1.toString().length != int2.toString().length) {
    return false;
  }
	let lookup = {};
	for (let digit of int1.toString()) {
		lookup[digit] = lookup[digit] ? ++lookup[digit] : 1;
	}

	for (let digit of int2.toString()) {
    if(!(lookup[digit])) {
      return false;
    } else {
      lookup[digit] -= 1;
    }
  }
  return true;
}

console.log(sameFrequency(22, 22));
