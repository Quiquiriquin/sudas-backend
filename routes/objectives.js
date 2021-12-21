import ObjectiveController from '../controllers/ObjectiveController';
var express = require('express');
var router = express.Router();


/* GET users listing. */
router.post('/', ObjectiveController.create);
router.get('/', ObjectiveController.list);
router.get('/:id', ObjectiveController.get);
router.patch('/:id', ObjectiveController.update);

module.exports = router;
