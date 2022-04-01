import AuthorController from '../controllers/AuthorController';
import express from 'express';
const router = express.Router();


/* GET users listing. */
router.post('/', AuthorController.create);
router.get('/', AuthorController.list)
router.get('/:id', AuthorController.get);
router.patch('/', AuthorController.update);
router.delete('/:id', AuthorController.delete);

module.exports = router;
