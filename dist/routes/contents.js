'use strict';

var _ContentController = require('../controllers/ContentController');

var _ContentController2 = _interopRequireDefault(_ContentController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', _ContentController2.default.list);
router.get('/:id', _ContentController2.default.get);
router.patch('/', _ContentController2.default.update);
router.post('/', _ContentController2.default.create);
router.delete('/:id', _ContentController2.default.delete);

module.exports = router;