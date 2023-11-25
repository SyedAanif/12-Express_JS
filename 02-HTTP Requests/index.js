import express from "express";

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`=== Express Server running on port: ${PORT} ===`);
});

// HTTP GET
// path, (request, response) call back
app.get("/", (req, res) => {
    // console.log(req.rawHeaders);
    // res.send("Response from Express Server.");
    res.send("<h1>HTML response home page</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact</h1>");
});

// HTTP POST
app.post("/register", (req, res) => {
    res.sendStatus(201);
});

// HTTP PUT
app.put("/user/user-id", (req, res) => {
    res.sendStatus(200);
});

// HTTP PATCH
app.patch("/user/user-id", (req, res) => {
    res.sendStatus(200);
});

// HTTP DELETE
app.delete("/user/user-id", (req, res) =>{
    res.sendStatus(200);
});