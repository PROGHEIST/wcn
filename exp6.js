// Step 1: Installation & Configuration
// Run in terminal before starting:
// npm init -y
// npm install express
// create file exp6.js
// run using "node exp6.js"

const express = require('express');
const app = express();
const port = 3000;

// Step 2: Callback Function Example
function greetUser(name, callback) {
  console.log("Processing...");
  setTimeout(() => {
    callback(`Hello, ${name}!`);
  }, 1000);
}

// Step 3: Event Loop Demonstration
console.log("Start");
setTimeout(() => console.log("Event loop example: Executed later"), 0);
console.log("End");

// Step 4: Creating Express App
app.get('/', (req, res) => {
  greetUser('Pratik', (message) => {
    res.send(message + " Welcome to Express App!");
  });
});

// Step 5: Start the Server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
