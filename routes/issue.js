const express = require('express')
const router = express.Router();

const homecontroller = require('../controllers/home_controller');
const { findOne } = require('../models/project_issues');
const ProjectModel = require('../models/project_issues')

router.get('/main',homecontroller.home)
router.post('/create',homecontroller.create)
router.get('/delete/:id',homecontroller.delete)

module.exports = router