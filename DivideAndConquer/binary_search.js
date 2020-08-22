 /* Given a sorted array of integers, write a function called search
 that accepts a value and returns the index where the value passed
 to the function is located. If the valeu is not found, return -1. */

 //Optimized solution O(logN)
 function search(array, val) {
     let min = 0;
     let max = array.length - 1;

     while (min <= max) {
         let middle = Math.floor((min + max) / 2);
         let currentElement = array[middle];

         if (currentElement < val) {
             min = middle + 1;
         } 
         else if (currentElement > val) {
             max = middle - 1;
         } 
         else {
            return middle;
         }
     }
     return -1;
 }