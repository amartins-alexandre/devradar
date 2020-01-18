const routes = require('express').Router();
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

// DEV CONTROLLER
routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

// SEARCH CONTROLLER
routes.get('/search', SearchController.index);

module.exports = routes;
