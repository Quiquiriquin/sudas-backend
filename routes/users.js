import UserController from '../controllers/UserController';
var express = require('express');
var router = express.Router();


/* GET users listing. */
router.post('/', UserController.create);
router.post('/login', UserController.login);
router.get('/', UserController.list)

module.exports = router;
