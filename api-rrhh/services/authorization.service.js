const redisClient = require('../services/redis').redisClient;
const errors = require('../constants/error');

const requireAuthService = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).send(errors.ERROR_401);
  }
  return redisClient.get(authorization, (err, reply) => {
  if (err || !reply) {
    return res.status(401).send(errors.ERROR_401);
  }
    return next();
  });    
}

module.exports = {
    requireAuthService
}