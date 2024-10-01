// Exercise 10: Write a function `convertToCamelCase` that takes a string
// with words separated by spaces or underscores, and returns the string in camelCase format.
// Example: convertToCamelCase("hello_world") should return "helloWorld".

console.log(convertToCamelCase("hello_world")); // Expected output: "helloWorld"

function convertToCamelCase(snakedText) {
  return snakedText
    .toLowerCase()
    .replace(/([　_][a-z])/g, (group) =>
      group.toUpperCase().replace(" ", "").replace("_", "")
    );
}
