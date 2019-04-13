const redisClient = require('../services/redis').redisClient;
const authorizationService = require('../services/authorization.service');

const requireAuthController = (req, res, next) => {
  return authorizationService.requireAuthService(req, res, next);
};

module.exports = {
  requireAuthController
}