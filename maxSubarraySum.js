/* Write a function called maxSubarraySum which accepts 
an array  of integers and a number called n. The function
should calculate  the maximum sum of n consecutive elements
in the array. */


// Naive approach O(n^2)
function maxSubarraySumNaive(arr, n) {
  if (n > arr.length) {
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i <= arr.length - n; i++) {
    temp = 0;
    for(let j = 0; j < n; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}
console.log(maxSubarraySumNaive([2,6,9,2,1,8,5,6,3], 3))

// Optimized O(n) 
function maxSubarraySum(arr, n) {
  let maxSum = 0;
  let tempSum = 0;
  if (n > arr) return null;
  for(let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for(let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i]; // subtract previous, add next
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3], 3))