'use strict';

var _ObjectiveController = require('../controllers/ObjectiveController');

var _ObjectiveController2 = _interopRequireDefault(_ObjectiveController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', _ObjectiveController2.default.create);
router.get('/', _ObjectiveController2.default.list);
router.get('/:id', _ObjectiveController2.default.get);
router.patch('/:id', _ObjectiveController2.default.update);

module.exports = router;