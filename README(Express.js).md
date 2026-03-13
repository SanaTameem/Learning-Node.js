What is express?
Why should we use it?

Express is a minimal node.js framework with high level abstraction. It is built on top of node.
Express allows for the faster development of node applications. Express makes it easy to organize our application in MVC architecter.

Features :

- Complex Routing
- Easier handling of requests and responses
- middleware
- server side rendering...

What is an API? (Application Programming Interface)
It is a piece of software that is used by another piece of software in order to allow applications to talk to each other.
Simple example (Restaurant example)

Imagine a restaurant:

👩 You = the customer

🧑‍🍳 Kitchen = the system / program

🧑‍💼 Waiter = the API

In programming

An API allows:

One application

To request data or service

From another application

What is a Web API?
A Web API is simply an API that works over the internet.

It allows web applications to communicate with servers using HTTP.

common styles (ways) to Build APIs :

- REST API (Most Popular)
- SOAP API
- GraphQL API

What is REST(Representational State Transfer) API?
EST is a way of designing APIs using simple URLs and HTTP methods.

The 4 Main REST Methods:
GET Get data
POST Create data
PUT/PATCH Update data
DELETE Delete data

Practical REST design principles:
REST principles are the rules or guidelines that make a REST API simple, organized, and easy to use.
There are 6 main REST principles.

1️⃣ Separate API into Logical Resources

In REST, we organize data into resources.
Instead of mixing everything in one endpoint, the API is divided into logical resources such as users, products, or orders.

2️⃣ Use Resource-Based URLs

URLs should describe what the resource is, not what action to perform.
A resource is usually a noun, such as users, not an action.

Example:
/users ✔
/getUsers ❌

3️⃣ Use HTTP Methods to Show Actions (Verbs)

REST APIs use HTTP methods (verbs) such as GET, POST, PUT, PATCH, and DELETE to tell the server what action to perform on a resource.

Example:
GET → retrieve data
POST → create data
PUT/PATCH → update data
DELETE → remove data

4️⃣ Send and Receive Data as JSON

REST APIs usually send and receive data in JSON format because it is simple, lightweight, and easy for applications to read and process.

5️⃣ Stateless

REST APIs are stateless, which means every request must contain all the information needed for the server to process it.
The server does not remember previous requests, so each request is independent.

REST API URL Structure and HTTP Methods

Base URL
https://www.something.com/endpoint_name

## Action Method Endpoint

Create a resource POST /resource_name

Read all resources GET /resource_name

Read a specific resource GET /resource_name/{id}

Update a resource PUT / PATCH /resource_name/{id}

Delete a resource DELETE /resource_name/{id}

Get related resource GET /resource_name/{id}/resource_name

What is JSON (Javascript Object Notation)?
It is a clean, readable way to send data from one place to another.
It's keys should always be strings.

What is Jsend?
For formatting a JSON response we are using JSend to standardize the response.It has 3 types of response: success, fail, error.
