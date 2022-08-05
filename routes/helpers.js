const models = require('../models')

exports.getClients = () => {
  return new Promise( (resolve, reject)  => {

    models.clients.findAll().then( clients => resolve( clients ) )

  })
}
