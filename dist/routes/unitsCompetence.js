'use strict';

var _UnitCompetenceController = require('../controllers/UnitCompetenceController');

var _UnitCompetenceController2 = _interopRequireDefault(_UnitCompetenceController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id', _UnitCompetenceController2.default.get);
router.get('/subject/:subjectId', _UnitCompetenceController2.default.list);
router.patch('/:id', _UnitCompetenceController2.default.update);
router.post('/', _UnitCompetenceController2.default.create);
router.delete('/:id', _UnitCompetenceController2.default.delete);

module.exports = router;