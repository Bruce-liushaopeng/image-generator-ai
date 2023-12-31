const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5001;
var bodyParser = require("body-parser");

const app = express();

// Enable body parser
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// set static folder 
app.use(express.static(path.join(__dirname, 'public')))
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
 });
app.use('/openai', require('./routes/openaiRoutes'))

app.listen(port, () => console.log("Server started on port " + port));