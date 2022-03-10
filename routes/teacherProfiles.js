import TeacherProfileController from '../controllers/TeacherProfileController';
var express = require('express');
var router = express.Router();


/* GET users listing. */
router.patch('/:id', TeacherProfileController.update);
router.post('/:subjectId', TeacherProfileController.create);
router.get('/subject/:subjectId', TeacherProfileController.getBySubjectId);

module.exports = router;
