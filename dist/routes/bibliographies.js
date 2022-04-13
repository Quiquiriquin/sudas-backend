'use strict';

var _BiblipgraphyController = require('../controllers/BiblipgraphyController');

var _BiblipgraphyController2 = _interopRequireDefault(_BiblipgraphyController);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

/* GET users listing. */
router.post('/', _BiblipgraphyController2.default.create);
router.get('/subject/:subjectId', _BiblipgraphyController2.default.getBySubject);
router.get('/', _BiblipgraphyController2.default.list);
router.get('/:id', _BiblipgraphyController2.default.get);
router.patch('/', _BiblipgraphyController2.default.update);
router.delete('/:id', _BiblipgraphyController2.default.delete);

module.exports = router;