// HTTP ROUTING
var snapData 			= require('../controllers/sample-chat-data.json')
var apiRouter 			= require('express').Router()

//||\\ API routes

// Data Sends
apiRouter.get('/api/lib', function(req, res){
	res.json(snapData)
	console.log('sending snapData from server')
})

// Page Routes
// \\// SHELL
apiRouter.get('/', function (req, res){
    res.sendFile('shell.html', {root: './public/html'})
})

// Exports
module.exports = apiRouter
