var createError = require('http-errors');
var express = require('express');
var path = require('path');

var app = express();
const port = 13000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => console.log(`Server running at ${port}`));
