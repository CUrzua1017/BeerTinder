const Beer = require('../models/Beer.model');

module.exports.getAllBeers = (request, response) => {
    Beer.find() 
        .then(allBeers => response.json(allBeers))
        .catch(err => response.json({ error: err }))
};

module.exports.createBeer = (request, response) => {
    Beer.create(request.body) 
        .then(newBeer => response.json (newBeer))
        .catch(err => response.status(400).json(err));
};

module.exports.addLike = (request, response) => {
    Beer.findByIdAndUpdate(
        request.params.beerId, 
        {
            $inc: {
                likes: 1
            }
        },
        { 
            new: true
        },
    )
        .then(updatedBeer => response.json(updatedBeer))
        .catch(err => response.json({ error: err}))
}


module.exports.deleteBeer = (request, response) => {
    Beer.findByIdAndDelete(request.params.beerId)
        .then(() => response.json({success:true}))
}

module.exports.getOneBeer = (request, response) => {
    console.log(request.params);
    Beer.findById(request.params.beerId)
        .then(retrievedBeer => response.json(retrievedBeer))
}

module.exports.updateBeer = (request, response) => {
    Beer.findByIdAndUpdate(
        request.params.beerId,
        request.body, 
        {
            new: true,
            runValidators: true
        }
    )
    .then(updatedBeer => response.json(updatedBeer))
    .catch(err => response.status(400).json(err));
}