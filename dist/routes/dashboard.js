'use strict';

var _DashboardController = require('../controllers/DashboardController');

var _DashboardController2 = _interopRequireDefault(_DashboardController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', _DashboardController2.default.sections);

module.exports = router;