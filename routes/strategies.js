import StrategyController from '../controllers/StrategyController';
import express from 'express';
const router = express.Router();


/* GET users listing. */
router.post('/', StrategyController.create);
router.get('/', StrategyController.list)
router.get('/:id', StrategyController.get);
router.patch('/', StrategyController.update);
router.delete('/:id', StrategyController.delete);

module.exports = router;
