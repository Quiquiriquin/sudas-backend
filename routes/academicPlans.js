import AcademicPlanController from '../controllers/AcademicPlanController';
var express = require('express');
var router = express.Router();


/* GET users listing. */
router.post('/', AcademicPlanController.create);
router.get('/', AcademicPlanController.list)
router.get('/:id', AcademicPlanController.get)
router.patch('/:id', AcademicPlanController.update)

module.exports = router;
