const express = require('express');
const serve   = require('express-static');
var app = express();
app.use(serve(__dirname + '/public'));

const PORT = 3000;
app.listen(PORT);
console.log("Server running");