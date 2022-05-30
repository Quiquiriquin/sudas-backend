import ActivityController from '../controllers/ActivityController';
import express from 'express';
const router = express.Router();


/* GET users listing. */
router.post('/', ActivityController.create);
router.post('/unit/:unitId', ActivityController.assign);
router.post('/unit/remove/:unitId', ActivityController.remove);
router.get('/', ActivityController.list);
router.patch('/', ActivityController.update);
router.delete('/:id', ActivityController.delete);

module.exports = router;
