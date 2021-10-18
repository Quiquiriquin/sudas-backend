'use strict';

var _UserController = require('../controllers/UserController');

var _UserController2 = _interopRequireDefault(_UserController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', _UserController2.default.create);
router.post('/login', _UserController2.default.login);
router.get('/', _UserController2.default.list);

module.exports = router;