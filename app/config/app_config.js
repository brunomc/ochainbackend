var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT;
var app = module.exports = express();


app.listen(port);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

