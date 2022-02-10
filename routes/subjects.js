import SubjectController from '../controllers/SubjectController';
var express = require('express');
var router = express.Router();


/* GET users listing. */
router.post('/', SubjectController.create);
router.get('/', SubjectController.list);
router.get('/:id', SubjectController.get);
router.get('/related', SubjectController.getRelatedSubjects);
router.patch('/:id', SubjectController.update);
router.get('/biblio/:subjectId', SubjectController.getBiblio);

module.exports = router;
