var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/contacts', (req, res, next)=>{
   res.send('Retreiving the contact list'); 
});

router.get('/ocr', (req, res, next)=>{
    res.sendFile(path.join(__dirname + '../../public/index.html'));
});

module.exports = router;