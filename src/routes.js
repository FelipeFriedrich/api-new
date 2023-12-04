const  routes  = require('express').Router();
const Books = require('./controllers/book');
const Costumers = require('./controllers/costumer');

routes.get('/', (request, response) => { return response.json('Funcionando') });


routes.get ('/costumer/:id', Costumers.findByPK);
routes.get ('/costumers', Costumers.all);
routes.post ('/costumer', Costumers.create);
routes.patch ('/costumer/:id', Costumers.update);
routes.delete ('/costumer/:id', Costumers.delete);


routes.get ('/book/:id', Books.findByPK);
routes.get ('/books', Books.all);
routes.post ('/book', Books.create);
routes.patch ('/book/:id', Books.update);
routes.delete ('/book/:id', Books.delete);

/*
routes.get ('/rentBook/:id', books.findByPK);
routes.get ('/rentBooks', books.all);
routes.post ('/rentBook', books.create);
routes.patch ('/rentBook/:id', books.update);
routes.delete ('/rentBook/:id', books.delete);
*/

module.exports = routes;