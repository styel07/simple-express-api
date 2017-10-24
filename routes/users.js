const express = require('express');
const router = express.Router();
const users = require('../assets/users.json');

router.get('/', (req, res, next) => {
	console.log('hi user', users[0]);
	res.send('Users page');
});

router.get('/:id', (req, res, next) => {

});

module.exports = router;
