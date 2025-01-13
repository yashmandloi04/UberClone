require('../Config/Conn')
const mongoose = require('mongoose')
const JWT = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const captainSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      require: true,
      minlength: [3, 'Firstname must be at least 3 character long.'],
    },
    lastname: {
      type: String,
      minlength: [3, 'Lastname must be at least 3 character long.'],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  socketId: {
    type: String,
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'inactive',
  },
  vehicle: {
    color: {
      type: String,
      required: true,
      minlength: [3, 'Color must be at least 3 character long.'],
    },
    plate: {
      type: String,
      required: true,
      minlength: [3, 'Plate must be at least 3 character long.'],
    },
    capacity: {
      type: Number,
      required: true,
      minlength: [1, 'Capacity must be at least 1.'],
    },
    vehicleType: {
      type: String,
      required: true,
      enum: ['car', 'motorcycle', 'auto'],
    }
  },
  location: {
    ltd: {
      type: Number,
    },
    lng: {
      type: Number,
    }
  },
})

captainSchema.methods.generateAuthToken = function () {
  const token = JWT.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
  return token;
}


captainSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
}


captainSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
}

const captainModel = mongoose.models.captain || mongoose.model('captain', captainSchema)


module.exports = captainModel;