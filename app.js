//importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');

//port no
const port = 3000;

//adding middleware - cors
app.use(cors());

//body-parser
app.use(bodyparser.json());

//routes
app.use('/api', route);

//static files
app.use(express.static(path.join(__dirname, 'public')))

app.use('/lib', express.static(__dirname + '/node_modules/'));

//testing Server
app.get('/',(req, res)=>{
    res.send('foobar');
});

app.listen(port,()=>{
    console.log('Server started at port:'+port);
});

