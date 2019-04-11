const registerService = require('../services/register.service');

const registerUser = (req, res, db, bcrypt) => {
  return registerService.handleRegister(req, res, db, bcrypt);
}

module.exports = {
  registerUser: registerUser
};


