const captainModel = require('../Models/captain.model');

module.exports.createCaptain = async ({ firstname, lastname, email, password,
  color, plate, capacity, vehicleType }) => {

  if (!firstname || !email || !password || !color || !plate || !capacity || !vehicleType) {
    throw new Error('All fields are required.');
  }

  const captain = await captainModel.create({
    fullname: {
      firstname,
      lastname,
    },
    email,
    password,
    vehicle: {
      color,
      plate,
      capacity,
      vehicleType,
    }
  })

  return captain
};

module.exports.isCaptainRegistered = async ({ email }) => {
  if(!email) {
    throw new Error('Email is required.');
  }
  const captain = await captainModel.findOne({ email });
  return captain ? true : false; 
}