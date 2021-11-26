import UserController from '../controllers/UserController';
var express = require('express');
var router = express.Router();


/* GET users listing. */
router.post('/users-dashboard', UserController.createAdmin);
router.post('/', UserController.create);
router.post('/login', UserController.login);
router.get('/', UserController.list)
router.get('/:id', UserController.get)
router.patch('/:id', UserController.update)

module.exports = router;
