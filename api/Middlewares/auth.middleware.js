const blacklistTokenModel = require('../Models/blacklistToken.model');
const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');

module.exports.authUser = async (req, res, next) => {
  const token = req.cookies.token || req.header('Authorization')?.replace('Bearer ', '');

  const blacklistToken = await blacklistTokenModel.findOne({ token: token })
  if(blacklistToken)
    return res.status(401).json({ message: 'Unauthorized.' });

  if(!token)
    return res.status(401).json({ message: 'Unauthorized.' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await userModel.findOne({ _id: decoded._id});
    

    if (!user) {
      throw new Error();
    } 
    req.user = user;
    return next();
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized.' });
  }
};
