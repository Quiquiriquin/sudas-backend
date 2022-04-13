'use strict';

var _AchivementController = require('../controllers/AchivementController');

var _AchivementController2 = _interopRequireDefault(_AchivementController);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

/* GET users listing. */
router.post('/', _AchivementController2.default.create);
router.get('/', _AchivementController2.default.list);
router.get('/:id', _AchivementController2.default.get);
router.patch('/', _AchivementController2.default.update);
router.delete('/:id', _AchivementController2.default.delete);

module.exports = router;