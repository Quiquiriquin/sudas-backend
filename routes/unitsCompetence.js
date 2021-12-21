import UnitCompetenceController from '../controllers/UnitCompetenceController';
var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/:id', UnitCompetenceController.get);
router.patch('/', UnitCompetenceController.update);
router.post('/', UnitCompetenceController.create);
router.delete('/:id', UnitCompetenceController.delete);

module.exports = router;
