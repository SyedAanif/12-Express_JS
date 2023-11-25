import express from "express";

import { dirname }from 'path';
import { fileURLToPath } from 'url';

import bodyParser from "body-parser"; // body-parser middleware
import morgan from "morgan"; // morgan logging middleware

const __dirname = dirname(fileURLToPath(import.meta.url)); // current directory name

const PORT = 3000;

const app = express();

// Middlewares -> preprocess, authenticate/authorize, logging, error handling (spring-boot filter chains)

// CUSTOM Middleware for logging
// gets request, response, next(to chain next middleware or handler)
function logger(req, res, next) {
    console.log(`Request Method: ${req.method}`);
    console.log(`Request URL: ${req.url}`);
    next(); // use this to move to next handler or middleware
}


// parse application/x-www-form-urlencoded
// use as a middleware, before the handlers
// NOTE:: we can use different app.use for each middleware
// Order matters
app.use(
    bodyParser.urlencoded({extended: true}), // body-parser
    logger, // custom middle-ware
    morgan('combined') // logging
    );

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});

// HTTP GET
app.get("/", (req, res) => { 
    res.sendFile(__dirname + "/public/index.html");
});

// HTTP POST with middleware request parsed using body-parser
app.post("/submit", (req, res) => {
    console.log(req.body); // only acts after from body-parser
    bandName = req.body["street"] + req.body["pet"];
    res.send(`<h1>Your band-name is:</h1> <h2>${bandName}</h2>`);
});