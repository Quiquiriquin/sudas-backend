import PurposeController from '../controllers/PurposeController';
var express = require('express');
var router = express.Router();


/* GET users listing. */
router.post('/', PurposeController.create);
router.get('/:id', PurposeController.get);
router.patch('/:id', PurposeController.update);


module.exports = router;
