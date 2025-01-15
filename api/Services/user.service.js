const mongoose = require('mongoose')
const userModel = require('../Models/user.model')

module.exports.createUser = async ({
  firstname, lastname, email, password
}) => {
  if(!firstname || !email || !password)
    throw new Error('All fields are required.')
  const user = userModel.create({
    fullname: {
      firstname,
      lastname,
    },
    email,
    password,
  })
  return user
}

module.exports.isUserRegistered = async ({ email }) => {
  if (!email) throw new Error('Email is required.')
  const user = await userModel.findOne({ email })
  return user ? true : false
}