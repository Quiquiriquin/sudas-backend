import EditorialController from '../controllers/ConnectorController';
import express from 'express';
const router = express.Router();


/* GET users listing. */
router.post('/', EditorialController.create);
router.get('/', EditorialController.list)
router.get('/:id', EditorialController.get);
router.patch('/', EditorialController.update);
router.delete('/:id', EditorialController.delete);

module.exports = router;
