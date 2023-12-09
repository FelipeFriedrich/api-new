const  routes  = require('express').Router();
const Books = require('./controllers/book');
const Costumers = require('./controllers/costumer');
const RentBook = require('./controllers/rentBook');

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


routes.get ('/rentBook/:id', RentBook.findByPK);
routes.get ('/rentBooks', RentBook.all);
routes.post ('/rentBook', RentBook.create);
routes.patch ('/rentBook/:id', RentBook.update);
routes.delete ('/rentBook/:id', RentBook.delete);


module.exports = routes;