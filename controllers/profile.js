const handleProfileGet = (req, res, db) => {
  const { id } = req.params;
  db.select('*').from('users').where({id})
    .then(user => {
      if (user.length) {
        res.json(user[0])
      } else {
        res.status(400).json('Usuario no encontrado')
      }
    })
    .catch(err => res.status(400).json('error al obtener el usuario'))
}

const handleProfileUpdate = (req, res, db) => {
  const { id } = req.params
  const { name, age } = req.body.formInput
  db('users')
  .where({ id })
  .update({ name: name })
  .then(resp => {
    if (resp) {
      res.json("Correcto!")
    } else {
      res.status(400).json('Usuario no encontrado')
    }
  })
  .catch(err => res.status(400).json('error al modificar el usuario'))
}

module.exports = {
  handleProfileGet,
  handleProfileUpdate
}