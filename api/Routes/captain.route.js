const router = require('express').Router();
const captainController = require('../Controllers/captain.controller');
const authMiddleware = require('../Middlewares/auth.middleware');
const { body } = require('express-validator');

router.post('/register', [
  body('fullname.firstname').isLength({ min: 3 }).withMessage('Firstname must be at least 3 character long.'),
  body('email').isEmail().withMessage('Please enter a valid email'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 character long.'),
  body('vehicle.color').isLength({ min: 3 }).withMessage('Color must be at least 3 character long.'),
  body('vehicle.plate').isLength({ min: 3 }).withMessage('Plate must be at least 3 character long.'),
  body('vehicle.capacity').isLength({ min: 1 }).withMessage('Capacity must be at least 1.'),
  body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('Vehicle type must be car, motorcycle or auto.'),
], 
  captainController.registerCaptain
);

router.post('/login', [
  body('email').isEmail().withMessage('Please enter a valid email'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 character long.'),
], captainController.loginCaptain);

module.exports = router;