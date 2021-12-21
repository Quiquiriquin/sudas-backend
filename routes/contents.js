import ContentController from '../controllers/ContentController';
var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', ContentController.list);
router.get('/:id', ContentController.get);
router.patch('/', ContentController.update);
router.post('/', ContentController.create);
router.delete('/:id', ContentController.delete);

module.exports = router;
