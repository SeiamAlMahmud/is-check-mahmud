const fs = require("fs");
const path = require("path");
const { URL } = require("url");

// Check if a value is a number
const isNumber = (value) => typeof value === "number" && !isNaN(value);

// Check if a number is an integer
const isInteger = (value) => Number.isInteger(value);

// Check if a number is a float
const isFloat = (value) => isNumber(value) && !isInteger(value);

// Check if a number is NaN
const isNaNValue = (value) => Number.isNaN(value);

// Check if a number is finite
const isFiniteNumber = (value) => Number.isFinite(value);

// Check if a number is infinite
const isInfinity = (value) => value === Infinity || value === -Infinity;

// Check if a value is odd
const isOdd = (num) => isNumber(num) && num % 2 !== 0;

// Check if a value is even
const isEven = (num) => isNumber(num) && num % 2 === 0;

// Check if a value is an array
const isArray = (value) => Array.isArray(value);

// Check if a value is an object
const isObject = (value) => value !== null && typeof value === "object" && !Array.isArray(value);

// Check if a value is a string
const isString = (value) => typeof value === "string";

// Check if a value is null
const isNull = (value) => value === null;

// Check if a value is undefined
const isUndefined = (value) => typeof value === "undefined";

// Check if a value is a date
const isDate = (value) => value instanceof Date;

// Check if a value is binary (Buffer or Uint8Array)
const isBinary = (value) => Buffer.isBuffer(value) || value instanceof Uint8Array;

// Check if a value is a valid URL
const isURL = (value) => {
    try {
        new URL(value);
        return true;
    } catch (err) {
        return false;
    }
};

// Check if a file is of a specific format
const isFileType = (filePath, format) => {
    if (!fs.existsSync(filePath)) return false;
    const ext = path.extname(filePath).toLowerCase().replace(".", "");
    return ext === format.toLowerCase();
};

// Specific file type checks
const isSVG = (filePath) => isFileType(filePath, "svg");
const isPNG = (filePath) => isFileType(filePath, "png");
const isJPEG = (filePath) => isFileType(filePath, "jpeg") || isFileType(filePath, "jpg");
const isMP3 = (filePath) => isFileType(filePath, "mp3");
const isMP4 = (filePath) => isFileType(filePath, "mp4");
const isWebP = (filePath) => isFileType(filePath, "webp");

// Function to get the type of a URL or file path
const getType = (input) => {
    if (isURL(input)) {
        const ext = path.extname(new URL(input).pathname).toLowerCase().replace(".", "");
        return ext ? `URL (${ext})` : "URL";
    }
    
    if (fs.existsSync(input)) {
        const ext = path.extname(input).toLowerCase().replace(".", "");
        return ext ? `File (${ext})` : "Unknown File Type";
    }
    
    return "Unknown";
};

module.exports = {
    isNumber,
    isInteger,
    isFloat,
    isNaNValue,
    isFiniteNumber,
    isInfinity,
    isOdd,
    isEven,
    isArray,
    isObject,
    isString,
    isNull,
    isUndefined,
    isDate,
    isBinary,
    isURL,
    isSVG,
    isPNG,
    isJPEG,
    isMP3,
    isMP4,
    isWebP,
    getType,
};