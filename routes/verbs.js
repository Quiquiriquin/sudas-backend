import VerbController from '../controllers/VerbController';
import express from 'express';
const router = express.Router();


/* GET users listing. */
router.post('/', VerbController.create);
router.get('/', VerbController.list)
router.get('/:id', VerbController.get);
router.patch('/', VerbController.update);
router.delete('/:id', VerbController.delete);

module.exports = router;
