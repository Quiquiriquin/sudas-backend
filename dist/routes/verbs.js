'use strict';

var _VerbController = require('../controllers/VerbController');

var _VerbController2 = _interopRequireDefault(_VerbController);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

/* GET users listing. */
router.post('/', _VerbController2.default.create);
router.get('/', _VerbController2.default.list);
router.get('/:id', _VerbController2.default.get);
router.patch('/', _VerbController2.default.update);
router.delete('/:id', _VerbController2.default.delete);

module.exports = router;