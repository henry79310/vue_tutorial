const express = require('express');

const router = express.Router();


router.post('/userLogin', function(req, res) {
    res.cookie('Authorization','Authorization', { maxAge:  2 * 60 * 60 * 1000});
    res.json({success:true, data:'ok'});
   
});

router.get('/userLogout',function(req,res){
    res.cookie('Authorization','Authorization', { maxAge: 0 });
    res.json({success:true, data:'ok'});
});

router.get('/userAuthkey',function(req, res){
    var cookie = req.headers.cookie;
    if(cookie){
        res.json({success:true, data:'CWB-XXX-XXX-XXX'});
    }else{
        res.json({success:false, msg:'error'});
    }
});




module.exports = router;