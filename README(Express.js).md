# Express.js and REST API Notes 🚀

## What is Express? ⚡

Express is a minimal **Node.js framework** with high-level abstraction. It is built on top of Node.js.

Express allows for **faster development of Node applications** and makes it easy to organize applications in an **MVC architecture**.

**Features:**
- 🛣 Complex routing
- 📬 Easier handling of requests and responses
- 🧩 Middleware
- 🌐 Server-side rendering

---

## What is an API? (Application Programming Interface) 🔗

An API is a piece of software that is used by another piece of software to allow applications to **communicate with each other**.

**Simple example (Restaurant analogy):**
- 👩 **You** = the customer
- 🧑‍🍳 **Kitchen** = the system/program
- 🧑‍💼 **Waiter** = the API

**In programming:**  
An API allows one application to **request data or services** from another application.

---

## What is a Web API? 🌍

A **Web API** is simply an API that works over the internet.  
It allows **web applications to communicate with servers using HTTP**.

**Common styles to build APIs:**
- REST API (most popular)
- SOAP API
- GraphQL API

---

## What is a REST (Representational State Transfer) API? 📝

REST is a way of designing APIs using **simple URLs** and **HTTP methods**.

**The 4 main REST methods:**
| Method | Action |
|--------|------------|
| GET | Get data |
| POST | Create data |
| PUT/PATCH | Update data |
| DELETE | Delete data |

---

## Practical REST Design Principles ✅

REST principles make an API **simple, organized, and easy to use**.

### 1️⃣ Separate API into Logical Resources
- Organize data into resources like users, products, or orders.
- Avoid mixing everything in one endpoint.

### 2️⃣ Use Resource-Based URLs
- URLs should describe **what the resource is**, not the action.
- Example:
  - `/users` ✔
  - `/getUsers` ❌

### 3️⃣ Use HTTP Methods to Show Actions (Verbs)
- Use HTTP methods to indicate the action:
  - **GET** → retrieve data  
  - **POST** → create data  
  - **PUT/PATCH** → update data  
  - **DELETE** → remove data

### 4️⃣ Send and Receive Data as JSON
- REST APIs usually use **JSON format** because it’s lightweight and easy to process.

### 5️⃣ Stateless
- Every request must contain all necessary information.  
- The server does **not remember previous requests**; each request is independent.

---

## REST API URL Structure and HTTP Methods 🌐

**Base URL:**  
`https://www.something.com`

| Action                   | Method    | Endpoint                          |
| ------------------------ | --------- | --------------------------------- |
| Create a resource        | POST      | `/resource_name`                  |
| Read all resources       | GET       | `/resource_name`                  |
| Read a specific resource | GET       | `/resource_name/{id}`             |
| Update a resource        | PUT/PATCH | `/resource_name/{id}`             |
| Delete a resource        | DELETE    | `/resource_name/{id}`             |
| Get related resource     | GET       | `/resource_name/{id}/resource_name` |

---

## What is JSON (JavaScript Object Notation)? 🗂

- JSON is a **clean, readable way to send data** from one place to another.
- JSON keys should **always be strings**.

---

## What is JSend? 📦

- JSend is a **standard for formatting JSON responses**.
- It has **three types of responses**:
  - `success`
  - `fail`
  - `error`

---

## What is Middleware? 🧩

Middleware is like a **helper function** that runs **between the request and the response**.  

Think of it as a **stop on the way** where Express can do something with the request before sending the response.

**In easy words:**
- Middleware takes `req` and `res` (the request and response)
- Does something (like logging, checking authentication, or parsing data)
- Then either **passes control to the next middleware/route** or sends a response

**Everything is middleware in Express**  
- Routes, built-in functions, and custom helpers are all treated as middleware in Express.

**Middleware stack**
- Middleware functions are executed **in order — one after another**.
- Think of them as a **stack of tasks**.
- Each middleware does something, then passes control to the next one using `next()`.

**Using middleware in Express**
- Use **`app.use()`** for global middleware
- Pass middleware **directly to a route** for route-specific tasks