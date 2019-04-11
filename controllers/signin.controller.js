const signinService = require('../services/signin.service');
const redisClient = signinService.redisClient;

const signinController = (db, bcrypt, req, res) => {
  return signinService.signinService(db, bcrypt, req, res);
}

const createSessionController = (user) =>{
  return signinService.createSessionService(user);
}

const getAuthTokenController = (req, res) => {
  return signinService.getAuthTokenService(req, res);
}

const signinAuthentication = ( db, bcrypt ) => ( req, res ) => {
  const { authorization } = req.headers;
  return authorization ? getAuthTokenController( req, res )
    : signinController(db, bcrypt, req, res)
    .then(data =>
      data.id && data.email ? createSessionController(data) : Promise.reject(data))
    .then(session => res.json(session))
    .catch(err => res.status(400).json(err));
}

module.exports = {
  signinAuthentication: signinAuthentication,
  redisClient
}