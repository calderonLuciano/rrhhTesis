const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const morgan = require('morgan');

//importacion de modulos
const register = require('./controllers/register.controller');
const signin = require('./controllers/signin.controller');
const auth = require('./controllers/authorization.controller');

//Database Setup
const db = knex({
  client: 'pg',
  connection: process.env.POSTGRES_URI
});

const app = express();

//const whitelist = ['http://localhost:3001']
const whitelist = ['*']

const corsOptions = {
  origin: function (origin, callback) {
    //if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    //} else {
     // callback(new Error('Not allowed by CORS'))
    //}
  }
}

app.use(morgan('combined'));
app.use(cors(corsOptions))
app.use(bodyParser.json());

//rutas
app.post('/api/signin', signin.signinAuthentication(db, bcrypt))
app.post('/api/register', (req, res) => { register.registerUser(req, res, db, bcrypt) })

app.listen(3000, ()=> {
  console.log('app corriendo en localhost:3000');
})
