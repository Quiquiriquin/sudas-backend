import UnitCompetenceController from '../controllers/UnitCompetenceController';
var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/:id', UnitCompetenceController.get);
router.get('/subject/:subjectId', UnitCompetenceController.list);
router.patch('/:id', UnitCompetenceController.update);
router.post('/', UnitCompetenceController.create);
router.delete('/:id', UnitCompetenceController.delete);

module.exports = router;
