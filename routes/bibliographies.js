import BiblipgraphyController from '../controllers/BiblipgraphyController';
import express from 'express';
const router = express.Router();


/* GET users listing. */
router.post('/', BiblipgraphyController.create);
router.get('/subject/:subjectId', BiblipgraphyController.getBySubject)
router.get('/', BiblipgraphyController.list)
router.get('/:id', BiblipgraphyController.get);
router.patch('/', BiblipgraphyController.update);
router.delete('/:id', BiblipgraphyController.delete);

module.exports = router;
