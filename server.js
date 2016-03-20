// server.js

// set up ======================================================================
var express  		= require('express');
var app      		= express();
var port     		= process.env.PORT || 3000;
var bodyParser   	= require('body-parser');
var configDB 		= require('./config/database.js');
var apiRoutes 		= require('./app/routes.js');

// configuration ===============================================================

// set up our express application
app.use(express.static(__dirname + '/public'))

app.use(bodyParser()); // get information from html forms

// routes ======================================================================
app.use('/', apiRoutes)

app.use('/api/lib', apiRoutes) // Initialize routes to use

// launch ======================================================================
app.listen(port);
console.log('Up and running on Port: ' + port);