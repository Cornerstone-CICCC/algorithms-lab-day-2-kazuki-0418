// Exercise 5: Write a function `countConsonants` that takes a string
// and returns the number of consonants in the string.
// Example: countConsonants("hello world") should return 7.
const vowelList = ["a", "i", "u", "e", "o", " "];

console.log(countConsonants("hello world")); // Expected output: 7

function countConsonants(text) {
  let countedConsonantsNumber = 0;
  const charArray = text.split("");
  for (let i = 0; i < charArray.length; i++) {
    if (!vowelList.includes(charArray[i])) {
      countedConsonantsNumber++;
    } else {
      continue;
    }
  }
  return countedConsonantsNumber;
}
