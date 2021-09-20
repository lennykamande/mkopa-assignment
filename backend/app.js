'use strict'
// import express
const express = require ("express");
// import routes 

let routes = require('./src/routes/routes');

// create express app
const app = express();

// define port to run express app
const port = process.env.PORT || 3000;

// use middleware on express app
app.use(express.json());

routes(app);

// Add endpoint
app.get('/', (req, res) => {
    res.send("SMS Microservice. Refer provided documentation for usage.");
});

// Listen to server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

module.exports = app
