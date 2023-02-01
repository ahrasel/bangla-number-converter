# Bangla Number Converter

A simple npm package to convert Western decimal numbers to Bengali decimal numbers.

# Installation

`npm install bangla-number-converter`

# Usage

```javascript
const banglaNumberConverter = require("bangla-number-converter");

console.log(banglaNumberConverter.toBanglaNumber(1234567890));
// Output: ১,২৩,৪৫,৬৭,৮৯০

console.log(banglaNumberConverter.toBanglaNumber(1234567890.12, true));
// Output: ১,২৩,৪৫,৬৭,৮৯০.১২
```

# API

`toBanglaNumber(number, isCommaSeparated = false)`

- `number:` The decimal number to be converted. Can be an integer or a float.

- `isCommaSeparated:` A boolean indicating whether the converted number should be separated by commas. Defaults to false.
  Returns a string representing the given number in Bengali decimal form.

# License

MIT.
