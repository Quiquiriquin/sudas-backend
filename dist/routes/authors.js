'use strict';

var _AuthorController = require('../controllers/AuthorController');

var _AuthorController2 = _interopRequireDefault(_AuthorController);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

/* GET users listing. */
router.post('/', _AuthorController2.default.create);
router.get('/', _AuthorController2.default.list);
router.get('/:id', _AuthorController2.default.get);
router.patch('/', _AuthorController2.default.update);
router.delete('/:id', _AuthorController2.default.delete);

module.exports = router;