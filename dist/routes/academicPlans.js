'use strict';

var _AcademicPlanController = require('../controllers/AcademicPlanController');

var _AcademicPlanController2 = _interopRequireDefault(_AcademicPlanController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', _AcademicPlanController2.default.create);
router.get('/', _AcademicPlanController2.default.list);
router.get('/:id', _AcademicPlanController2.default.get);
router.patch('/:id', _AcademicPlanController2.default.update);

module.exports = router;