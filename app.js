const express = require('express');
const app = express();
const port = 3000;
const users = require('./routes/users');

app.use('/static', express.static('public'));

app.get('/', function(req,res) {
	res.send('hello world');
});

app.use('/users', users);

app.listen(port, function() {
	console.log('app listening on port ' + port + '!');
});
