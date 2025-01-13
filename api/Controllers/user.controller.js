const { model } = require('mongoose')
const userModel = require('../Models/user.model')
const blacklistTokenModel = require('../Models/blacklistToken.model')
const userService = require('../Services/user.service')
const { validationResult } = require('express-validator')

module.exports.registerUser = async (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() })

  const { fullname, email, password } = req.body

  const isRegistered = await userService.isUserRegistered({ email })
    (isRegistered) ? res.status(400).send('User already registered') : null;

  const hashPassword = await userModel.hashPassword(password)
  const user = await userService.createUser({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashPassword,
  })
  const token = await user.generateAuthToken();
  return res.status(201).json({ token, user })
}

module.exports.loginUser = async (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() })

  const { email, password } = req.body

  const user = await userModel.findOne({ email }).select('+password')

  if (!user)
    return res.status(401).json({ message: 'Invalid email or password' })

  const isMatched = await user.comparePassword(password)

  if (!isMatched)
    return res.status(401).json({ message: 'Invalid email or password' })

  const token = user.generateAuthToken()
  res.cookie('token', token)
  return res.status(200).json({ token, user })
}

module.exports.getUserProfile = async (req, res, next) => {
  res.status(200).json(req.user)
}

module.exports.logoutUser = async (req, res, next) => {
  res.clearCookie('token')
  const token = req.cookies.token || req.header('Authorization').replace('Bearer ', '');
  await blacklistTokenModel.create({ token })
  res.status(200).json({ message: 'Logout successfully' })
}