const check = require("./index");

console.log(check.isNumber(10)); // true
console.log(check.isInteger(10)); // true
console.log(check.isFloat(10.5)); // true
console.log(check.isNaNValue(NaN)); // true
console.log(check.isFiniteNumber(100)); // true
console.log(check.isFiniteNumber(Infinity)); // false
console.log(check.isInfinity(Infinity)); // true
console.log(check.isInfinity(-Infinity)); // true

console.log(check.isOdd(3)); // true
console.log(check.isEven(4)); // true
console.log(check.isArray([1, 2, 3])); // true
console.log(check.isObject({ name: "Mahmud" })); // true
console.log(check.isString("Hello")); // true
console.log(check.isNull(null)); // true
console.log(check.isUndefined(undefined)); // true
console.log(check.isDate(new Date())); // true
console.log(check.isBinary(Buffer.from("Hello"))); // true
console.log(check.isURL("https://example.com")); // true

console.log(check.getType("https://example.com/image.png")); // "URL (png)"
console.log(check.getType("https://example.com/video.mp4")); // "URL (mp4)"
console.log(check.getType("test.png")); // যদি ফাইল থাকে তাহলে "File (png)", না থাকলে "Unknown"
console.log(check.getType("randomfile.xyz")); // "Unknown"