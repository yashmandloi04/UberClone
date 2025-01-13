require('../Config/Conn')
const mongoose = require('mongoose')
const JWT = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
  fullname:{
    firstname: {
      type: String,
      require: true,
      minlength: [ 3, 'First name must be at least 3 character long.']
    },
    lastname: {
      type: String,
      minlength: [ 3, 'Last name must be at least 3 character long.']
    },
  },
  email: {
    type: String,
    require: true,
    unique: true,
    minlength: [ 5, 'Email name must be at least 5 character long.']
  },
  password: {
    type: String,
    require: true,
    select: false, // by default this password field will not be selected whenever whole data is fetched.
  },
  socketId: {
    type: String,
  },
})


UserSchema.methods.generateAuthToken = function () {
  const token = JWT.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' })
  return token
}

UserSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password)
}

UserSchema.statics.hashPassword = async function (password){
  return await bcrypt.hash(password, 10)
}

const userModel =  mongoose.models.user || mongoose.model('user', UserSchema);
// const userModel = mongoose.model('user', UserSchema);

module.exports = userModel