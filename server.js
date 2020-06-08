// Modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

// bdd
mongoose
    .connect("mongodb://localhost/db")
    .then(() => {
        console.log("Connected to mongoDB")
    })
    .catch((e) => {
        console.log("Error while DB connecting");
        console.log(e);
    });

// définit express
const app = express();

//body parser
const urlencodedParser = bodyParser.urlencoded({
    extended: true
});
app.use(urlencodedParser);
app.use(bodyParser.json());

//CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

//route /
const router = express.Router();
app.use("/user", router);
require(__dirname + "/controllers/userController")(router);

//port
const port = 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));