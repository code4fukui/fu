# fu

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

[
![NPM Version](https://img.shields.io/npm/v/fu.svg)
](https://www.npmjs.com/package/fu)
[
![License](https://img.shields.io/npm/l/fu.svg)
](LICENSE)

A tiny, fast, and functional library for JavaScript, specializing in eager evaluation. It's designed to be lightweight and zero-dependency.

## Features

- **Lightweight**: Minified version is just a few kilobytes.
- **Fast**: Optimized for eager (non-lazy) evaluation.
- **Functional**: Provides a suite of common functional utilities.
- **Curried**: Most functions are automatically curried, allowing for partial application.
- **Zero-dependency**: Plain JavaScript with no external dependencies.

## Installation & Usage

### Deno / Browser (ESM)

Import `fu` directly from the CDN.

```javascript
import fu from "https://code4fukui.github.io/fu/fu.js";

const numbers = [1, 2, 3, 4, 5];

// Check if all numbers are less than 10
const allUnder10 = fu.all(n => n < 10, numbers);
console.log(allUnder10); // true

// Create a function to take the first 3 elements
const take3 = fu.take(3);
console.log(take3(numbers)); // [1, 2, 3]
```

### Node.js (NPM)

Install the package from npm:

```bash
npm install fu
```

Then import it into your project:

```javascript
import fu from 'fu';
// or for CommonJS:
// const fu = require('fu');

const users = [{ name: 'Dog', age: 2 }, { name: 'Cat', age: 4 }];

// Pluck the 'name' property from each object
const names = fu.map(fu.property('name'), users);
console.log(names); // ['Dog', 'Cat']
```

## API Reference

All functions that accept a list as their final argument are curried.

---

### **`all(predicate, list)`**
Checks if all elements in `list` satisfy the `predicate` function.

```javascript
fu.all(n => typeof n