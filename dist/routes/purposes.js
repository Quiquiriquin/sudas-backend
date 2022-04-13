'use strict';

var _PurposeController = require('../controllers/PurposeController');

var _PurposeController2 = _interopRequireDefault(_PurposeController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', _PurposeController2.default.create);
router.get('/:id', _PurposeController2.default.get);
router.patch('/:id', _PurposeController2.default.update);

module.exports = router;