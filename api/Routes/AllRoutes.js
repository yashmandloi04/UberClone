const router = require('express').Router()

router.use('/users', require('./user.route'))
router.use('/captains', require('./captain.route'))

module.exports = router