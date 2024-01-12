function anagrams(string1, string2) {
    // Step 1: Convert both strings to lowercase
    let lowerString1 = string1.toLowerCase();
    let lowerString2 = string2.toLowerCase();
   
    // Step 2: Remove all non-alphabetic characters from both strings
    let cleanString1 = lowerString1.replace(/[^a-z]/g, '');
    let cleanString2 = lowerString2.replace(/[^a-z]/g, '');
   
    // Step 3: Split both strings into arrays of characters
    let string1Array = cleanString1.split('');
    let string2Array = cleanString2.split('');
   
    // Step 4: Sort both arrays
    string1Array.sort();
    string2Array.sort();
   
    // Step 5: Convert both arrays back into strings
    let sortedString1 = string1Array.join('');
    let sortedString2 = string2Array.join('');
   
    // Step 6: Compare the sorted strings
    return sortedString1 === sortedString2;
   }
   console.log(anagrams('rail safety', 'fairy tales')); 
//    true ^^

   console.log(anagrams('RAIL! SAFETY!', 'fairy tales'));
//    true ^^

console.log(anagrams('Hi there', 'Bye there'));
// false ^^