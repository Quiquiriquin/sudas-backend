import MethodController from '../controllers/MethodController';
import express from 'express';
const router = express.Router();


/* GET users listing. */
router.post('/', MethodController.create);
router.get('/', MethodController.list)
router.get('/:id', MethodController.get);
router.patch('/', MethodController.update);
router.delete('/:id', MethodController.delete);

module.exports = router;
