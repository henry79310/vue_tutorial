
const express = require('express');
const bodyParser = require('body-parser');
const serveStatic = require('serve-static');
const fs = require('fs');

const config = require('./routes/config/config');
const utils = require('./routes/config/utils');

const userRouter = require('./routes/user-router');


const app = express();
const logger = utils.log;

const indexPagePath = __dirname + '/public/content.html';


/********        WEBPACK  HOT RELOAD  *******/

var webpack = require('webpack'),
webpackDevMiddleware = require('webpack-dev-middleware'),
webpackHotMiddleware = require('webpack-hot-middleware'),
webpackDevConfig = require('./webpack.config.dev.js');

var compiler = webpack(webpackDevConfig); 

// attach to the compiler & the server
   app.use(webpackDevMiddleware(compiler, { 

// public path should be the same with webpack config
    publicPath: webpackDevConfig.output.publicPath,
    noInfo: true,
    stats: {
        colors: true
    },
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    }
}));
app.use(webpackHotMiddleware(compiler)); 


/********    WEBPACK  HOT RELOAD END  *******/

app.use(bodyParser.urlencoded({ extended: true }));
app.use(serveStatic(config.staticFileDirectory.webPrefix));
app.use(serveStatic(config.staticFileDirectory.pagePrefix));


/****  Vue component template ****/


/** devManual router */
app.get('/devManual/desc',function(req, res){
    var cookie = req.cookies;
    res.sendFile(__dirname + '/public/content.html');
});

app.use('/devManual/rules',express.static(__dirname + '/public/content.html'));


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

