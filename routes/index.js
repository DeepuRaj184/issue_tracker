const express = require('express')
const router = express.Router();

const homecontroller = require('../controllers/home_controller')


router.get('/',homecontroller.home)
router.use('/issue',require('./issue'))
router.use('/fields',require('./fields'))

module.exports = router;
