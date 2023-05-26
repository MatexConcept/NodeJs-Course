// const express = require('express')

// const handleRefreshToken = require('../controllers/refreshTokenController')

// const router = express.Router()


// router.get('/', handleRefreshToken.handleRefreshToken)

// module.exports = router

const express = require('express')
const router = express.Router()
const handleRefreshToken = require('../controllers/refreshTokenController')

router.get('/', handleRefreshToken.handleRefreshToken )

module.exports = router