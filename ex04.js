// Exercise 4: Write a function `mostFrequentChar` that takes a string and returns the character
// that appears the most times. If there is a tie, return the first character that reaches the maximum frequency.
// Example: mostFrequentChar("javascript") should return "a".

console.log(mostFrequentChar("javascript")); // Expected output: "a"

function mostFrequentChar(text) {
  const charArray = text.split("");
  const charObj = {};
  let largestCountedChar = "";
  for (let i = 0; i <= charArray.length; i++) {
    if (!Object.keys(charObj).includes(charArray[i])) {
      charObj[charArray[i]] = 1;
    } else {
      charObj[charArray[i]]++;
      largestCountedChar = charArray[i];
    }
  }

  return largestCountedChar;
}
