import SubjectController from '../controllers/SubjectController';
var express = require('express');
var router = express.Router();


/* GET users listing. */
router.post('/', SubjectController.create);
router.get('/', SubjectController.list);
router.get('/related/:semester/plan/:academicPlanId', SubjectController.getRelatedSubjects);
router.get('/:id', SubjectController.get);
router.patch('/:id', SubjectController.update);
router.get('/biblio/:subjectId', SubjectController.getBiblio);
router.get('/collaborator/:collaborator', SubjectController.collaboratorSubjects);

module.exports = router;
