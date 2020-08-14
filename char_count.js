function charCount(str) {
    let result = {};
     for(let i = 0; i < str.length; i++) {
         let ch = str.charAt(i).toLowerCase();
         if(result.hasOwnProperty(ch)) {
            result[ch] += 1;
         } else {
            result[ch] = 1;
         }
     }
    return result;
}

console.log(charCount('Hello there hi again'));