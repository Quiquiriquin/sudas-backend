'use strict';

var _StrategyController = require('../controllers/StrategyController');

var _StrategyController2 = _interopRequireDefault(_StrategyController);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

/* GET users listing. */
router.post('/', _StrategyController2.default.create);
router.get('/', _StrategyController2.default.list);
router.get('/:id', _StrategyController2.default.get);
router.patch('/', _StrategyController2.default.update);
router.delete('/:id', _StrategyController2.default.delete);

module.exports = router;