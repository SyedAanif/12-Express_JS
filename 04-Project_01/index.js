import express from "express";
import bodyParser from "body-parser"; // now incorporated into Express JS

import { dirname }from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url)); // current directory name

const PORT = 3000;

const app = express();

var userAuthorized = false;

app.listen(PORT, () => {
    console.log(`Secrets server started on port: ${PORT}`);
});

// app.use(express.urlencoded({extended: true}));

app.use(bodyParser.urlencoded({extended: true}));

function authenticationMiddleware(req, res, next){
    const password = req.body['password'];
    if(password === "ILoveProgramming") {
        userAuthorized = true;
        
    } 
    next();
}
app.use(authenticationMiddleware);


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
    // console.log(req.body)
    if(userAuthorized){
        res.sendFile(__dirname + "/public/secret.html");
    } else{
        res.redirect("/");
        // res.sendFile(__dirname + "/public/index.html");
    }
});