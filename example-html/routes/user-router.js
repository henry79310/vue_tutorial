const express = require('express');
const router = express.Router();


router.post('/userLogin', function(req, res) {
    res.cookie('Authorization','login ok', { maxAge: 900000, httpOnly: true });
    res.redirect('/devManual/desc');
   
});
router.get('/userLogout',function(req,res){
    res.cookie('Authorization','login ok', { maxAge: 0, httpOnly: true });
    res.redirect('/devManual/desc');
});

router.get('/userAuthkey',function(req, res){
    res.json({sucess:true, data:'CWB-XXX-XXX-XXX'});
});




module.exports = router;