const express = require('express')
const router = express.Router();

const homecontroller = require('../controllers/home_controller')

const fields_Controller = require('../controllers/fields_controller')


router.get('/list/:id',fields_Controller.fields)
router.post('/create/:id',fields_Controller.create_issue)
router.get('/delete/:id',fields_Controller.delete)
router.post('/filter-name',fields_Controller.filter_name)
router.post('/filter-team',fields_Controller.filter_team)
module.exports = router;