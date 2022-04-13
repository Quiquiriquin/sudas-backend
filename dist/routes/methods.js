'use strict';

var _MethodController = require('../controllers/MethodController');

var _MethodController2 = _interopRequireDefault(_MethodController);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

/* GET users listing. */
router.post('/', _MethodController2.default.create);
router.get('/', _MethodController2.default.list);
router.get('/:id', _MethodController2.default.get);
router.patch('/', _MethodController2.default.update);
router.delete('/:id', _MethodController2.default.delete);

module.exports = router;