const express = require('express');
const abc = require('../introduction/intro')
const logger = require('../logger/logger')
const pwd = require('../util/helper')
const pcs = require('../validator/formatter')
const router = express.Router();

router.get('/test-me', function (req, res) {
    logger.batchName();
    pwd.date();
    pwd.BatchInfo(); 
    res.send('This is the second routes implementation')
    pcs.trim();
    pcs.LowerCase();
    pcs.toUpperCase();
});
// console.log('My batch is', abc.name)
    //  abc.printName()
    //  res.send('My second ever api!')

router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason 