let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const book = require('../models/book');

//connect with nba model

let Book = require('../models/book');

/* Read operation */
// Get Route for nba 50 point game list


router.get('/',(req,res,next)=>{
    book.find((err,booklist)=>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('nba50',
            {title:'NBA 50 point games',
            Booklist:booklist
        })
        }
    });
});
module.exports=router;