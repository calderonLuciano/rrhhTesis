const errors = require('../constants/error');
const redis = require('../services/redis');

const createSessionService = (user) => {
  const { email, id } = user;
  const token = redis.signToken(email);
  return redis.setToken(token, id)
    .then(() => {
      return { success: 'true', userId: id, token, user }
    })
    .catch(console.log);
};

const signinService = (db, bcrypt, req, res) => {
    const { email, password } = req.body;

  if (!email || !password) {
    return Promise.reject('Datos incorrectos');
  }

  return db.select('email', 'hash').from('login')
    .where('email', '=', email)
    .then(data => {
      const isValid = bcrypt.compareSync(password, data[0].hash);
      if (isValid) {
        return db.select('*').from('users')
          .where('email', '=', email)
          .then(user => { return user[0] })
          .catch(err => { return res.status(400).json(errors.ERROR_400) })
      } else {
        return Promise.reject('Credenciales incorrectas');
      }
    })
    .catch(err => err)
}

const getAuthTokenService = (req, res) => {
  const { authorization } = req.headers;

  return redis.redisClient.get(authorization, (err, reply) => {
    if (err || !reply) {
      return res.status(401).send(errors.ERROR_401);
    }
    return res.json({id: reply})
  });
}

module.exports = {
    getAuthTokenService,
    signinService,
    createSessionService,
    
}