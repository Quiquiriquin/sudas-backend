'use strict';

var _TeacherProfileController = require('../controllers/TeacherProfileController');

var _TeacherProfileController2 = _interopRequireDefault(_TeacherProfileController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.patch('/:id', _TeacherProfileController2.default.update);
router.post('/:subjectId', _TeacherProfileController2.default.create);
router.get('/subject/:subjectId', _TeacherProfileController2.default.getBySubjectId);

module.exports = router;