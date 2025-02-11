# is-check-mahmud  
*A lightweight utility package for type checking in JavaScript & Node.js*  

![npm](https://img.shields.io/npm/v/is-check-mahmud?color=blue)  
![license](https://img.shields.io/github/license/SeiamAlMahmud/is-check-mahmud)  
![downloads](https://img.shields.io/npm/dt/is-check-mahmud)  

---

## 📌 Features  
✔ Check data types (number, string, array, object, null, undefined, etc.)  
✔ Check if a value is **odd/even**  
✔ Check if a string is **URL, binary, SVG, PNG, JPEG, MP3, MP4, WebP, etc.**  
✔ Detect **file type from a URL or file path**  
✔ Works in both **Node.js & Browser**  

---

## 📥 Installation  

### Using npm:  
```sh
npm install is-check-mahmud
```
### Using yarn:  
```sh
yarn add  is-check-mahmud
```

## 📌 Import The package  
```
const isCheck = require("is-check-mahmud");
```
## 📌 Check basic data types 
```
console.log(isCheck.isNumber(123));      // true

console.log(check.isInteger(10)); // true
console.log(check.isFloat(10.5)); // true
console.log(check.isNaNValue(NaN)); // true
console.log(check.isFiniteNumber(100)); // true
console.log(check.isFiniteNumber(Infinity)); // false
console.log(check.isInfinity(Infinity)); // true
console.log(check.isInfinity(-Infinity)); // true

```
```
console.log(isCheck.isString("Hello"));  // true
console.log(isCheck.isArray([1, 2, 3])); // true
console.log(isCheck.isObject({ key: "value" })); // true
console.log(isCheck.isNull(null));       // true
console.log(isCheck.isUndefined(undefined)); // true

```

## 📌 Check even/odd numbers
```
console.log(isCheck.isEven(10)); // true
console.log(isCheck.isOdd(7));   // true
```

## 📌 Check URLS and File types
```
console.log(isCheck.isURL("https://example.com")); // true
console.log(isCheck.isBinary("1010101"));         // true
console.log(isCheck.isSVG("<svg></svg>"));         // true
console.log(isCheck.isPNG("image.png"));          // true
console.log(isCheck.isJPEG("image.jpeg"));        // true
console.log(isCheck.isMP3("audio.mp3"));          // true
console.log(isCheck.isMP4("video.mp4"));          // true
console.log(isCheck.isWebP("image.webp"));        // true
```
## 📌 Check URLS and File types
```
console.log(isCheck.getFileType("https://example.com/image.png")); // "png"
console.log(isCheck.getFileType("C:/Users/user/music.mp3")); // "mp3"

```

## API Methods
| Method                | Description                                                      | Example Usage                                            |
|-----------------------|------------------------------------------------------------------|----------------------------------------------------------|
| `isNumber(value)`      | Check if the value is a number                                   | `isCheck.isNumber(123) // true`                           |
| `isInteger(value)`      | Check if the value is a integer                                   | `isCheck.isInteger(123) // true`                           |
| `isFloat(value)`      | Check if the value is a floating point number                                   | `isCheck.isFloat(10.5) // true`                           |
| `isNaNValue(value)`      | Check if the value is a NaN                                   | `isCheck.isNaNValue(NaN) // true`                           |
| `isFiniteNumber(value)`      | Check if the value is a Infinite number                                   | `isCheck.isFiniteNumber(100) // true`                           |
| `isInfinity(value)`      | Check if the value is a Infinity or -Infinity                                   | `isCheck.isInfinity(Infinity) // true`                           |
| `isString(value)`      | Check if the value is a string                                   | `isCheck.isString("Hello") // true`                       |
| `isArray(value)`       | Check if the value is an array                                   | `isCheck.isArray([1, 2, 3]) // true`                      |
| `isObject(value)`      | Check if the value is an object                                  | `isCheck.isObject({key: "value"}) // true`                |
| `isNull(value)`        | Check if the value is null                                       | `isCheck.isNull(null) // true`                            |
| `isUndefined(value)`   | Check if the value is undefined                                  | `isCheck.isUndefined(undefined) // true`                  |
| `isEven(number)`       | Check if the number is even                                      | `isCheck.isEven(10) // true`                              |
| `isOdd(number)`        | Check if the number is odd                                       | `isCheck.isOdd(7) // true`                                |
| `isURL(value)`         | Check if the value is a valid URL                                | `isCheck.isURL("https://example.com") // true`            |
| `isBinary(value)`      | Check if the value is binary                                     | `isCheck.isBinary("1010101") // true`                     |
| `isSVG(value)`         | Check if the value is an SVG                                     | `isCheck.isSVG("<svg></svg>") // true`                     |
| `isPNG(value)`         | Check if the value is a PNG image                                | `isCheck.isPNG("image.png") // true`                      |
| `isJPEG(value)`        | Check if the value is a JPEG image                               | `isCheck.isJPEG("image.jpeg") // true`                    |
| `isMP3(value)`         | Check if the value is an MP3 file                                | `isCheck.isMP3("audio.mp3") // true`                      |
| `isMP4(value)`         | Check if the value is an MP4 video                               | `isCheck.isMP4("video.mp4") // true`                      |
| `isWebP(value)`        | Check if the value is a WebP image                               | `isCheck.isWebP("image.webp") // true`                    |
| `getFileType(value)`   | Get file type from URL or file path                              | `isCheck.getFileType("https://example.com/image.png") // "png"` |