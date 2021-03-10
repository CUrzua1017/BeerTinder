const routesController = require('../controllers/beers.controller');

const { authenticate } = require ('../config/jwt.config');

module.exports = function(app){
    app.get('/api/beers', routesController.getAllBeers);
    app.post('/api/beers', routesController.createBeer);
    app.post('/api/beers/:beerId/likes', routesController.addLike);
    app.delete('/api/beers/:beerId', routesController.deleteBeer);
    app.get('/api/beers/:beerId', routesController.getOneBeer);
    app.put('/api/beers/:beerId', routesController.updateBeer);
}

// add authenticate to .get line 6 -> do not add. this was the problem