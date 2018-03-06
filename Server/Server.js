const {con} = require('../Config/Config');
const express = require('express');
const bodyParser = require('body-parser');
var route = require('../Route/route');

var app = express();


app.use(bodyParser.json());

route.route(app);


app.listen(3000,()=> {

    console.log('Connected');
})