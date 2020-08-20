// Write a function that takes in a string and return counts of each character in the string.

// function charCount(str) {
//     let result = {};
//      for(let i = 0; i < str.length; i++) {
//         let ch = str[i].toLowerCase();
//          if(/[a-z0-9]/.test(ch)) {
//              if(result.hasOwnProperty(ch)) {
//                 result[ch] += 1;
//              } else {
//                 result[ch] = 1;
//              }
//          }
//      }
//     return result;
// }

function charCount(str) {
    let result = {};
     for(let char of str) {
         if(isAlphanumeric(char)) {
            let ch = char.toLowerCase();
             result[ch] = ++result[ch] || 1;
         }
     }
    return result;
} // O(n)


//helper
function isAlphanumeric(char) {
    let code = char.charCodeAt();
    if ((code > 47 && code < 58) ||     //digits 0-9
        (code > 64 && code < 91) ||     //uper alpha A-Z
        (code > 96 && code < 123)) {    //lower alpha a-z
            return true;
        }
    return false;
}

console.log(charCount("Hello there hi!"));