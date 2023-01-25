function reverse(word){
   return word.split("").reverse().join("")
}
function isPalindrome(word) {
  // Write your algorithm here

  const reversedWord=reverse(word);

  return word === reversedWord
 
}

/* 
  Add your pseudocode here
1 split the word into letters 
2 revers the word 
3 join the word

if word is equal to reverse word then return true otherwise return false 
*/

/*
  Add written explanation of your solution here
isPalindrome function returns true  if the word is equal to the same word but reversed
 like abba is the same word when it reversed 
if the word is not equal to the same word when it is reversed then  isPalindrome returns false

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
