import DashboardController from '../controllers/DashboardController';
var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', DashboardController.sections);

module.exports = router;
