'use strict';

var _SubjectController = require('../controllers/SubjectController');

var _SubjectController2 = _interopRequireDefault(_SubjectController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', _SubjectController2.default.create);
router.get('/', _SubjectController2.default.list);
router.get('/related/:semester', _SubjectController2.default.getRelatedSubjects);
router.get('/:id', _SubjectController2.default.get);
router.patch('/:id', _SubjectController2.default.update);
router.get('/biblio/:subjectId', _SubjectController2.default.getBiblio);
router.get('/collaborator/:collaborator', _SubjectController2.default.collaboratorSubjects);

module.exports = router;