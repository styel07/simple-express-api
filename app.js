const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongooser = require('mongoose');
const passport = require('passport');
const session = require('express-session');

const port = process.env.PORT || 3000;
const users = require('./routes/users');
const app = express();

app.use('/static', express.static('public'));

app.get('/', function(req,res) {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.send('hello world');
	res.end('The time is' + Date.now());
});

app.use('/users', users);

app.listen(port, function() {
	console.log('app listening on port ' + port + '!');
});
