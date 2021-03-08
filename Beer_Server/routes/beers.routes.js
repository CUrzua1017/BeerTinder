const routesController = require('../controllers/beers.controller');

const { authenticate } = require ('../config/jwt.config');

module.exports = function(app){
    app.get('/api/beertinder',authenticate, routesController.getAllBeers);
    app.post('/api/beertinder', routesController.createBeer);
    app.post('/api/beertinder/:beerId/likes', routesController.addLike);
    app.delete('/api/beertinder/:beerId', routesController.deleteBeer);
    app.get('/api/beertinder/:beerId', routesController.getOneBeer);
    app.put('/api/beertinder/:beerId', routesController.updateBeer);
}

