const utils = {};


/* const config = require('./config.js');

const winston = require('winston');

require('winston-daily-rotate-file');

const fs = require('fs');

const logErrorName = config.logger.errorName;
var logErrorPath = config.logger.errorPath;
const clientLogErrorName = config.logger.errorClientName;
var clientLogErrorPath = config.logger.errorClientPath;

var logFolderSplit = logErrorPath.split("/");
var logFolder = '';
for (var i = 0; i < logFolderSplit.length - 1; i++) {
    logFolder = [logFolder, logFolderSplit[i], '/'].join('');
}


if (!fs.existsSync(logFolder)) {
    logErrorPath = logFolderSplit[logFolderSplit.length - 1];
    var clientLogErrorPathSplit = clientLogErrorPath.split("/");
    clientLogErrorPath = clientLogErrorPathSplit[clientLogErrorPathSplit.length - 1];
} */





// LOGGER 
/* utils.log = new(winston.Logger)({
    transports: [
        new(winston.transports.DailyRotateFile)({
            name: logErrorName,
            filename: logErrorPath,
            datePattern: 'yyyy-MM-dd.',
            prepend: true,
            level: 'error'
        })
    ]
});

utils.clientLog = new(winston.Logger)({
    transports: [
        new(winston.transports.DailyRotateFile)({
            name: clientLogErrorName,
            filename: clientLogErrorPath,
            datePattern: 'yyyy-MM-dd.',
            prepend: true,
            level: 'error'
        })
    ]
});

 */

module.exports = utils;