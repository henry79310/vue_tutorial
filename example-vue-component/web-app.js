 

const express = require('express');
const bodyParser = require('body-parser');
const serveStatic = require('serve-static');

const cookieParser = require('cookie-parser');
 
const app = express();

const config = require('./routes/config/config');

const userRouter = require('./routes/user-router');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(serveStatic(config.staticFileDirectory.webPrefix));
app.use(cookieParser());

app.use(express.static(__dirname + '/public/'));

/** devManual router */
app.get('/devManual/desc',function(req, res){
    var cookie = req.cookies;
    if(cookie.Authorization){
        res.sendFile(__dirname + '/public/content-desc-login.html');
    }else{
        res.sendFile(__dirname + '/public/content-desc.html');
    } 
    

});

app.use('/devManual/rules',express.static(__dirname + '/public/content-rules.html'));

/** user router  */
app.use(config.baseUrl, userRouter);

/** handle error */
app.use(function(err, req, res, next) {
    
       console.log(err);
       res.json({ success: false, message: 'error' });
       
});

/*handle 404*/
app.use(function(req, res) {
    res.redirect('/devManual/rules');
});


app.listen(config.port);

