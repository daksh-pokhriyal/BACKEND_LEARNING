# steps to initialize server
1. npm init -y
2. npm i express
3. make app.js
4. then write code
5. to execute -> node app.js
6. but use nodemon -> npx nodemon app.js


# what is node js ??
=> Node.js is a JavaScript runtime that lets you run JavaScript outside the browser.

# why do we use express js ?
=> we can also make server using node js , but it is easier to make with express js ,
node js for server creation has more complex code !


# nodemon -> jab code me changes hote hai to node js use refresh nhi krta to hame baar baar server restart krna padta hai , so we use nodemon to solve this problem ! chote se bhi change me server restart hoga !


# npx - package executioner
# npm - package installer



# npx nodemon server.js



## 1. How to Run Script Outside the Browser

- Normally, JavaScript runs inside a browser.
- To run JavaScript **outside the browser**, we use **Node.js**.
- Node.js provides a runtime environment to execute JS on a computer/server.

**Example:**

```bash
node app.js

```

---

## 2. What Are Packages

- **Packages** are reusable pieces of code written by other developers.
- They help avoid writing everything from scratch.
- Examples: `express`, `nodemon`, `mongoose`

---

## 3. How to Install Packages

- Node.js uses **npm (Node Package Manager)**.
- First initialize a project:

```bash
npm init -y

```

- Install a package:

```bash
npm install express

```

- Install as a development dependency:

```bash
npm install nodemon --save-dev

```

---

## 4. How to Use Packages

- Installed packages are used with `require()` or `import`.

**Example:**

```jsx
const express =require("express");

```

- The package functionality can now be used in the file.

---

## 5. What Is a Server

- A **server** is a program that:
    - Listens for client requests
    - Processes those requests
    - Sends back responses
- Servers usually run on a **port number** (e.g., 3000).

---

## 6. Create Server with Express (Basic Code)

### Step 1: Install Express

```bash
npm install express

```

### Step 2: Basic Server Code

```jsx
const express = require("express");

const app = express();



// server listen
app.listen(3000,() => {
console.log("Server started on port 3000");
});

```

### Step 3: Run Server

```bash
node index.js

```
Displaying Day 84 Notes.md.









## 1. Program Server to Respond to Users

### What is a Server?

A **server** is a program that:

- Listens for requests from clients (browser, mobile app, Postman)
- Processes the request
- Sends back a response

In web development, servers usually respond via **HTTP**.

---

### Basic Express Server Code

```jsx
const express =require('express');
const app =express();

// Route
app.get('/',(req, res) => {
    res.send('Hello User, Server is working!');
});

// Start server
app.listen(3000,() => {
console.log('Server running on port 3000');
});

```

### Explanation

- `express()` → creates the server
- `app.get()` → handles GET requests
- `req` → request object (data from user)
- `res` → response object (data sent back)
- `listen()` → starts the server

---

## 2. Deploy Server (Basic Understanding)

### What is Deployment?

Deployment means:

> Making your server available on the internet, not just localhost.
> 

### Common Platforms

- Render
- Railway
- Vercel (mostly frontend)
- AWS / DigitalOcean (advanced)

### Basic Deployment Steps (Conceptual)

1. Push code to GitHub
2. Connect GitHub repo to hosting service
3. Add environment variables
4. Build & start server
Displaying Day 86 Notes.md.