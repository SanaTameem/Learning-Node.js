# 🚀 Node.js Quick Starter Guide

A simple and clean guide for beginners who want to quickly start building projects with Node.js.

---

# 🌍 1️⃣ What is Node.js?

Node.js allows you to run **JavaScript outside the browser**.

You use it to:

- Build servers
- Create APIs
- Work with files
- Connect to databases
- Build backend applications

---

# 📦 2️⃣ Modules in Node.js

Modules are the building blocks of Node.js.

There are 3 types:

---

## ✅ 1. Core (Built-in) Modules

Already inside Node.js. No installation needed.

Examples:

- http
- fs
- path
- url
- os
- events

Use them like this:

```js
const http = require('http');
```

---

## ✅ 2. Local Modules (Your Own Files)

Every `.js` file is automatically a module.

### Export Example:

```js
// math.js
function add(a, b) {
  return a + b;
}

module.exports = add;
```

### Import Example:

```js
const add = require('./math');
console.log(add(2, 3));
```

---

## ✅ 3. NPM Modules (External Packages)

Initialize project:

```
npm init -y
```

Install package:

```
npm install superagent
```

Use it:

```js
const request = require('superagent');
```

---

# 🌐 3️⃣ HTTP Module (Create Server)

The http module allows you to:

- Create a server
- Receive requests
- Send responses

---

## 🖥 Basic Server Example

```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

---

## 🔎 Important Objects

### 📥 req (Request Object)

Contains:

- req.url
- req.method
- req.headers

---

### 📤 res (Response Object)

Used to send data back.

Important methods:

- res.write()
- res.end()
- res.writeHead()
- res.setHeader()
- res.statusCode

---

# 🛣 4️⃣ Simple Routing Example

```js
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Home Page');
  } else if (req.url === '/about') {
    res.end('About Page');
  } else {
    res.writeHead(404);
    res.end('Page Not Found');
  }
});

server.listen(3000);
```

---

# 📂 5️⃣ File System (fs Module)

Used to work with files.

---

## 🧱 Synchronous (Blocking)

```js
const fs = require('fs');

const data = fs.readFileSync('file.txt', 'utf-8');
console.log(data);

fs.writeFileSync('file.txt', 'Hello Node');
```

Blocks the program until finished.

---

## ⚡ Asynchronous (Non-blocking)

```js
const fs = require('fs');

fs.readFile('file.txt', 'utf-8', (err, data) => {
  if (err) return console.log(err);
  console.log(data);
});
```

Better for servers.

---

# 🧠 6️⃣ Asynchronous JavaScript Concepts

## 🔹 Callback (Old Way)

```js
function makeTea(callback) {
  setTimeout(() => {
    console.log('Tea is ready');
    callback();
  }, 2000);
}

makeTea(() => {
  console.log('I drink the tea');
});
```

---

## 🔹 Promise

Promise has 3 states:

- Pending
- Fulfilled
- Rejected

Example:

```js
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Done!');
  }, 1000);
});

myPromise
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
  .finally(() => console.log('Finished'));
```

---

## 🔹 Promise.all (Run in Parallel)

```js
const promise1 = Promise.resolve('First');
const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve('Second'), 1000)
);

Promise.all([promise1, promise2])
  .then((results) => console.log(results))
  .catch((err) => console.log(err));
```

---

## 🔹 Async / Await (Modern Way)

```js
function makeJuice() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Juice ready'), 2000);
  });
}

async function drinkJuice() {
  const juice = await makeJuice();
  console.log(juice);
}

drinkJuice();
```

---

# 🔄 7️⃣ Event Loop Order

```js
console.log('1. Start');

process.nextTick(() => console.log('2. Next tick'));

Promise.resolve().then(() => console.log('3. Promise'));

setTimeout(() => console.log('4. Timeout'), 0);

setImmediate(() => console.log('5. Immediate'));

console.log('6. End');
```

Output order:

1. Start
2. End
3. Next tick
4. Promise
5. Timeout
6. Immediate

Priority:

sync code → nextTick → Promises → Timers → setImmediate

---

# 📁 8️⃣ Path & URL Modules

## Path Module

Used for handling file paths.

```js
const path = require('path');

console.log(__dirname);
console.log(__filename);
```

---

## URL Module

Used for parsing URLs.

```js
const url = require('url');

const myUrl = new URL('http://example.com:8000/page?name=sana');

console.log(myUrl.hostname);
console.log(myUrl.pathname);
console.log(myUrl.searchParams.get('name'));
```

---

# 🔐 9️⃣ HTTPS Module

Secure version of HTTP (encrypted communication).

Used when building secure servers (SSL/TLS).

---

# 📦 1️⃣0️⃣ Nodemon (Auto Restart Server)

Install:

```
npm install --save-dev nodemon
```

Add in package.json:

```json
"scripts": {
  "dev": "nodemon index.js"
}
```

Run:

```
npm run dev
```

---

# 🏁 Final Notes

- Always handle errors.
- Use asynchronous methods for servers.
- Convert objects to JSON before sending:

```js
res.end(JSON.stringify({ name: 'Sana' }));
```

- Order of routes matters (specific routes first).

---

# 🎯 Goal

If you understand everything in this file,  
you are ready to start building:

- Simple APIs
- File-based projects
- Basic backend servers
- REST endpoints

Keep building 🚀
