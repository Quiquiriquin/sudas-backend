import SkillController from '../controllers/AttitudeController';
import express from 'express';
const router = express.Router();


/* GET users listing. */
router.post('/', SkillController.create);
router.get('/', SkillController.list)
router.get('/:id', SkillController.get);
router.patch('/', SkillController.update);
router.delete('/:id', SkillController.delete);

module.exports = router;
