const mongoose = require('mongoose');

const BeerSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: [
            3,
            'The name must be at least 3 characters.'
        ]
    },
    brewery: {
        type: String,
    },
    beerType: {
        type: String,
        minlength: [
            3,
            'The beer type must be at least 3 characters.'
        ],
        required: false,
    },
    description: {
        type: String,
        minlength: [
            3,
            'The description must be at least 3 characters.'
        ]
    },
    abv: {          // percentage
        type: Number,
            min: 0, 
            max: 100
    },
    ibu: {          // typ beer is 5-120
        type: Number,
            min: 0, 
            max: 125,
            required: false
    },
    availability: {
        type: String,
        required: false
    },
    image: {          
        type: String,
        required: false,
    },
    tastingNotes:{
        type: String,
        required: false
    },
    likes: {
        type: Number,
        default: 0
    },
}, {timestamps: true});

const Beer = mongoose.model('Beer', BeerSchema)
module.exports = Beer;