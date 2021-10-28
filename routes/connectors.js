import ConnectorController from '../controllers/ConnectorController';
import express from 'express';
const router = express.Router();


/* GET users listing. */
router.post('/', ConnectorController.create);
router.get('/', ConnectorController.list)
router.get('/:id', ConnectorController.get);
router.patch('/', ConnectorController.update);
router.delete('/:id', ConnectorController.delete);

module.exports = router;
