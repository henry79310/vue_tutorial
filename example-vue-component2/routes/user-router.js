const express = require('express');

const router = express.Router();


router.post('/userLogin', function(req, res) {

    res.cookie('Authorization','login ok', { maxAge: 90000000, httpOnly: true });
    res.json({success:true, data:'ok'});
   
});
router.get('/userLogout',function(req,res){
    res.cookie('Authorizationlogin ok', { maxAge: 0, httpOnly: true });
    res.json({success:true, data:'ok'});
});

router.get('/userAuthkey',function(req, res){
    var cookie = req.cookies;
    if(cookie.Authorization){
        res.json({success:true, data:'CWB-XXX-XXX-XXX'});
    }else{
        res.json({success:false, msg:'error'});
    }
});




module.exports = router;