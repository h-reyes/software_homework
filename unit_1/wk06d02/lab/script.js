function charCount(str) {
    let result = {};
   
    for (let i = 0; i < str.length; i++) {
       let char = str[i];
   
       if (result[char]) {
         result[char]++;
       } else {
         result[char] = 1;
       }
    }
   
    return result;
   }

   console.log(charCount('hello'));
    // Output: { h: 1, e: 1, l: 2, o: 1 }
console.log(charCount('Today is fantastic!'));
    //  Output: { T: 1, o: 1, d: 1, a: 3, y: 1, ' ': 2, i: 2, s: 2, f: 1, n: 1, t: 2, c: 1, '!': 1 }