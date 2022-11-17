let mongoose = require('mongoose');
//create nba 50 point games model

let bookModel = mongoose.Schema({
    name: String,
    points: Number,
    date: String,
    team: String,
    against: String
    },
    {
        collection: "nba50"
    }

);

module.exports = mongoose.model('nba',bookModel);
