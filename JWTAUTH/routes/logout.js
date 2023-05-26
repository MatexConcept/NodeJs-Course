
// const express = require('express')
// const handleLogout = require('../controllers/logoutControllers')

// const router = express.Router()
// router.get('/', handleLogout )
// module.exports = router

const express = require('express')
const router = express.Router()
const handleLogout = require('../controllers/logoutControllers')

router.get('/', handleLogout )

module.exports = router