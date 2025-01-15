const captainModel = require('../Models/captain.model');
const captainService = require('../Services/captain.service');
const blacklistTokenModel = require('../Models/blacklistToken.model');
const { validationResult } = require('express-validator');

module.exports.registerCaptain = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { fullname, email, password, vehicle } = req.body;

  const isRegistered = await captainService.isCaptainRegistered({ email });
  if (isRegistered) {
    res.status(400).json({ message: 'Captain already registered' })
    return
  }
  const hashedPassword = await captainModel.hashPassword(password);

  const captain = await captainService.createCaptain({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashedPassword,
    color: vehicle.color,
    plate: vehicle.plate,
    capacity: vehicle.capacity,
    vehicleType: vehicle.vehicleType,
  })
  const token = captain.generateAuthToken()

    if(!token){
      res.status(500).send('Internal server error')
    }

    res.status(201).send({ token, captain });
}

module.exports.loginCaptain = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;

  const captain = await captainModel.findOne({ email }).select('+password');

  if (!captain) {
    return res.status(400).json({ message: 'Invalid email or password.' });
  }
const isMatch = await captain.comparePassword(password);

  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid email or password.' });
  }

  const token = captain.generateAuthToken();

  if(!token) {
    return res.status(500).send('Internal server error')
  } 
  res.cookie('token', token)
  return res.status(200).send({ token, captain });
}

module.exports.logoutCaptain = async (req, res) => {
  const token = req.cookies.token || req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return res.status(400).json({ message: 'Invalid token.' });
  }
  await blacklistTokenModel.create({ token });
  res.clearCookie('token');
  return res.status(200).json({ message: 'Captain logged out.' });
}

module.exports.getCaptainProfile = async (req, res) => {
  const captain = req.captain;
  res.status(200).send(captain);
}