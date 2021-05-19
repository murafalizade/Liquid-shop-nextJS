const express = require('express')
const router = express.Router()
const mailController =  require('../controller/mailcontroller')

router.post('/', mailController)

module.exports = router;