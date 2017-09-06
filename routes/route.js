var express = require('express');
var router = express.Router();

router.get('/contacts', (req, res, next)=>{
   res.send('Retreiving the contact list'); 
});

module.exports = router;