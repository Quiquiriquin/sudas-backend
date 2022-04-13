'use strict';

var _ConnectorController = require('../controllers/ConnectorController');

var _ConnectorController2 = _interopRequireDefault(_ConnectorController);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

/* GET users listing. */
router.post('/', _ConnectorController2.default.create);
router.get('/', _ConnectorController2.default.list);
router.get('/:id', _ConnectorController2.default.get);
router.patch('/', _ConnectorController2.default.update);
router.delete('/:id', _ConnectorController2.default.delete);

module.exports = router;