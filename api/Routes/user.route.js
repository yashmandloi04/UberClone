const express = require('express')
const router = express.Router()
const { body } = require('express-validator')
const userController = require('../Controllers/user.controller')

router.post('/register', [
  body('email').isEmail().withMessage('Invalid Email'),
  body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 character long.'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 character long.'),
], userController.registerUser)

router.post('/login',
  [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 character long.'),
  ],
  userController.loginUser
)

module.exports = router