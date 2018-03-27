 

const express = require('express');
const bodyParser = require('body-parser');
const serveStatic = require('serve-static');
const fs = require('fs');

const config = require('./routes/config/config');
const utils = require('./routes/config/utils');

const datasetRouter = require('./routes/dataset-router');


const app = express();
const logger = utils.log;

const indexPagePath = __dirname + '/public/dist/content.html';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(serveStatic(config.staticFileDirectory.pagePrefix));
app.use(serveStatic(config.staticFileDirectory.webPrefix));


app.use('/devManual/*', express.static(indexPagePath));
app.use('/devManual', express.static(indexPagePath));    


app.use(config.baseUrl, datasetRouter);

/** handle error */
app.use(function(err, req, res, next) {
    
       console.log(err);
       res.json({ success: false, message: 'error' });
       
   });

/*handle 404*/
app.use(function(req, res) {
    
    fs.stat(indexPagePath, function(err, fileInfo) {
        if (err) {
            console.log(err);
            return;
        }
        if (fileInfo.isFile(indexPagePath)) {
            // WARNING !! If change web app prefix, it has to be changed.
            res.redirect('/devManual');
            return;
            /*res.sendFile(indexPagePath);
            return; */
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('file Not found');
        }
    });

});


app.listen(config.port);

