'use strict';

var _UserController = require('../controllers/UserController');

var _UserController2 = _interopRequireDefault(_UserController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/users-dashboard', _UserController2.default.createAdmin);
router.post('/', _UserController2.default.create);
router.post('/login', _UserController2.default.login);
router.get('/', _UserController2.default.list);
router.get('/available-users', _UserController2.default.listActiveTeachers);
router.get('/:id', _UserController2.default.get);
router.patch('/:id', _UserController2.default.update);

module.exports = router;