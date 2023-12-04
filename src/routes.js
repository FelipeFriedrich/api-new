const  routes  = require('express').Router();
const books = require('./controllers/book');

routes.get('/', (request, response) => { return response.json('Funcionando') });

/*
routes.get ('/client/:id', envioEmailControllers.envio);
routes.get ('/clients', envioEmailControllers.envio);
routes.post ('/client', envioEmailControllers.envio);
routes.patch ('/client/:id', envioEmailControllers.envio);
routes.delete ('/client/:id', envioEmailControllers.envio);
*/

routes.get ('/book/:id', books.findByPK);
routes.get ('/books', books.all);
routes.post ('/book', books.create);
routes.patch ('/book/:id', books.update);
routes.delete ('/book/:id', books.delete);

/*
routes.get ('/rentBook/:id', books.findByPK);
routes.get ('/rentBooks', books.all);
routes.post ('/rentBook', books.create);
routes.patch ('/rentBook/:id', books.update);
routes.delete ('/rentBook/:id', books.delete);
*/

module.exports = routes;