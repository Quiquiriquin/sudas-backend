import AchivementController from '../controllers/AchivementController';
import express from 'express';
const router = express.Router();


/* GET users listing. */
router.post('/', AchivementController.create);
router.get('/', AchivementController.list)
router.get('/:id', AchivementController.get);
router.patch('/', AchivementController.update);
router.delete('/:id', AchivementController.delete);

module.exports = router;
