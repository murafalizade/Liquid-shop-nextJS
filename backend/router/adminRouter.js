const express = require('express')
const Router = express.Router()
const productController = require('../controller/procutcontroller.js')
Router.get('/', productController.getAll)



module.exports = Router;