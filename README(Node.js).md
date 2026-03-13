# 🚀 Node.js Quick Starter Guide

A complete, organized guide for beginners who want to quickly start building projects with Node.js.  
Includes everything from HTTP servers, file system, async JS, Promises, modules, and more.

---

# 🌍 1️⃣ What is Node.js?

Node.js allows you to run **JavaScript outside the browser**.

You can use it to:

- Build servers
- Create APIs
- Work with files
- Connect to databases
- Build backend applications

---

# 📦 2️⃣ Modules in Node.js

Modules are the building blocks of Node.js applications.  
They let you organize your code into reusable pieces.

---

## ✅ 1. Core (Built-in) Modules

Node.js provides several **built-in modules**. No installation required.

Common modules:

- `fs` - File system operations  
- `http` - HTTP server and client  
- `path` - File path utilities  
- `os` - Operating system utilities  
- `events` - Event handling  
- `util` - Utility functions  
- `stream` - Streams  
- `crypto` - Cryptography  
- `url` - URL parsing  
- `querystring` - Query string handling  

Example:

```js
const http = require('http');
```

---

## ✅ 2. Local Modules

Any `.js` file is a module.

Export multiple things:

```js
// utils.js
exports.add = (a, b) => a + b;
exports.sub = (a, b) => a - b;
```

Export a single item:

```js
// math.js
module.exports = (a, b) => a + b;
```

Import:

```js
const math = require('./math');
console.log(math(2, 3));
```

---

## ✅ 3. NPM Modules (External)

Initialize a project:

```
npm init -y
```

Install a package:

```
npm install superagent
```

Use it:

```js
const request = require('superagent');
```

---

# 🌐 3️⃣ HTTP Module

The `http` module allows you to:

- Create a server  
- Receive requests from clients (browser, Postman, frontend)  
- Send responses  

It is **built-in**, no need to install.

---

## 🖥 3.1 Create Server

```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.end("Hello Sana!");
});

server.listen(3000);
```

---

## 🔹 3.2 server.listen()

Starts the server and listens on a port.

```js
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

---

## 🔹 3.3 Request Object (req)

Contains information about the client request.

Important properties:

- `req.url` - Requested URL path  
- `req.method` - HTTP method (GET, POST, etc.)  
- `req.headers` - Request headers  

---

## 🔹 3.4 Response Object (res)

Used to send data back to the client.

Important methods:

- `res.write()` - Send data  
- `res.end()` - End response and send it  
- `res.setHeader()` - Set headers  
- `res.statusCode` - Set HTTP status code  

---

## 🔹 3.5 http.get() (Request to Another Server)

Used when your server wants to fetch data from another API.

```js
const http = require("http");

http.get("http://example.com", (response) => {
  response.on("data", (chunk) => {
    console.log(chunk.toString());
  });
});
```

---

## 🔹 3.6 Handling POST Data

When a client sends data (like a form), listen for `data` and `end` events.

```js
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    let body = "";
    req.on("data", chunk => {
      body += chunk.toString();
    });
    req.on("end", () => {
      console.log(body);
      res.end("Data received");
    });
  }
});

server.listen(3000);
```

---

# 🛣 4️⃣ Routing Example

```js
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Home Page');
  } else if (req.url === '/product') {
    res.end('Product Page');
  } else if (req.url === '/api') {
    res.end('API Page');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
  }
});

server.listen(3000, 'localhost', () => {
  console.log('Server running at http://localhost:3000/');
});
```

---

# 📂 5️⃣ File System Module (fs)

### 5.1 Synchronous (Blocking)

```js
const fs = require('fs');

const data = fs.readFileSync('file.txt', 'utf-8');
console.log(data);

fs.writeFileSync('file.txt', 'Hello Node');
```

> Blocks the code until reading/writing is done.

---

### 5.2 Asynchronous (Non-blocking)

```js
const fs = require('fs');

fs.readFile('file.txt', 'utf-8', (err, data) => {
  if (err) return console.error(err);
  console.log(data);
});

fs.writeFile('file.txt', 'Hello Async Node', (err) => {
  if (err) console.error(err);
});
```

> Allows server to handle other requests at the same time 🚀

---

# 🧠 6️⃣ Asynchronous JavaScript

## 🔹 6.1 Callback

```js
function makeTea(callback) {
  setTimeout(() => {
    console.log("Tea is ready ☕");
    callback();
  }, 2000);
}

makeTea(() => {
  console.log("I drink the tea 😊");
});
```

---

## 🔹 6.2 Promise

Promise states:

- Pending  
- Fulfilled (success)  
- Rejected (error)

```js
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = Math.random() > 0.5;
    if (success) resolve('Operation completed successfully');
    else reject(new Error('Operation failed'));
  }, 1000);
});

myPromise
  .then(result => console.log('Success:', result))
  .catch(error => console.error('Error:', error.message))
  .finally(() => console.log('Operation completed'));
```

---

### Promise Methods

- `.then(onFulfilled, onRejected)`  
- `.catch(onRejected)`  
- `.finally(onFinally)`  

### Static Methods

- `Promise.all(iterable)`  
- `Promise.race(iterable)`  
- `Promise.allSettled(iterable)`  
- `Promise.resolve(value)`  
- `Promise.reject(reason)`

---

### 6.3 Async/Await

```js
function makeJuice() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Juice is ready 🧃"), 2000);
  });
}

async function drinkJuice() {
  const juice = await makeJuice();
  console.log(juice);
}

drinkJuice();
```

---

# 🔄 7️⃣ Event Loop

Order of execution:

```js
console.log('1. Start');

process.nextTick(() => console.log('2. Next tick'));

Promise.resolve().then(() => console.log('3. Promise'));

setTimeout(() => console.log('4. Timeout'), 0);

setImmediate(() => console.log('5. Immediate'));

console.log('6. End');
```

Output:

```
1. Start
6. End
2. Next tick
3. Promise
4. Timeout
5. Immediate
```

**Priority:** sync code → nextTick → Promises → Timers → setImmediate

---

# 🔗 8️⃣ Path & URL Modules

### Path

```js
const path = require('path');

console.log(__dirname);
console.log(__filename);
```

### URL

```js
const url = require('url');

const myUrl = new URL('http://example.com:8000/page?name=sana');

console.log(myUrl.hostname);
console.log(myUrl.pathname);
console.log(myUrl.searchParams.get('name'));
```

---

# 🔐 9️⃣ HTTPS Module

Secure version of HTTP (encrypted). Used for SSL/TLS.

---

# 🏎 10️⃣ Nodemon (Auto-restart server)

Install:

```
npm install --save-dev nodemon
```

Add in `package.json`:

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

# 🎯 11️⃣ HTTP Status Codes

| Code | Message | Description |
|------|---------|------------|
| 200  | OK      | Successful request |
| 201  | Created | Resource created |
| 301  | Moved Permanently | Resource moved |
| 400  | Bad Request | Client error |
| 401  | Unauthorized | Authentication needed |
| 403  | Forbidden | Access denied |
| 404  | Not Found | Resource not found |
| 500  | Internal Server Error | Server error |

---

# 📝 12️⃣ Final Notes

- Always handle errors.  
- Use async methods for servers.  
- Convert objects/arrays to JSON before sending:

```js
res.end(JSON.stringify({ name: "Sana" }));
```

- Order of routes matters: specific → generic → catch-all.  

- Keep practicing by building APIs, reading/writing files, and creating simple servers.  

---

# 🔥 You are ready to build Node.js projects!😊

---

