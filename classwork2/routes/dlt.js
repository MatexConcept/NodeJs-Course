const express = require('express')
const handleRegister = require('../controllers/dltControllers')
const router = express.Router()


router.post('/', handleRegister)

module.exports = router