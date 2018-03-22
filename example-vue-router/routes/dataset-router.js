const express = require('express');
const router = express.Router();


router.get('/datasetList/:type', function(req, res) {
    var data = {"success":true,"data":[{"dataname":"自動氣象站-氣象觀測資料","dataid":"O-A0001-001","format":["JSON","XML"]},{"dataname":"自動雨量站-雨量觀測資料","dataid":"O-A0002-001","format":["JSON","XML"]},{"dataname":"局屬氣象站-現在天氣觀測報告","dataid":"O-A0003-001","format":["JSON","XML"]},{"dataname":"酸雨pH值-每日酸雨pH值","dataid":"O-A0004-001","format":["JSON","XML"]},{"dataname":"紫外線指數-每日紫外線指數最大值","dataid":"O-A0005-001","format":["JSON","XML"]}]};
    res.json({ success: true, data: data });
   
});


router.get('/datasetPage/:type', function(req, res) {
    var data = {"success":true,"data":[{"id":"O-A0001-001","page":1},{"id":"O-A0006-001","page":2},{"id":"O-A0011-004","page":3},{"id":"O-A0019-001","page":4},{"id":"O-A0058-001","page":5},{"id":"O-B0028-002","page":6},{"id":"O-B0030-001","page":7},{"id":"O-B0031-003","page":8},{"id":"O-B0033-001","page":9},{"id":"O-B0045-001","page":10},{"id":"O-C0042-001","page":11},{"id":"O-C0042-006","page":12}]};
    res.json(data);
});




router.get('/datasetMetadata/:dataid', function(req, res) {
    var data = {"success":true,"data":{"dataname":"自動氣象站-氣象觀測資料","dataDescription":"自動氣象站資料-無人自動站氣象資料","downloadURL":"https://opendata.cwb.gov.tw/fileapi/v1/opendataapi?dataid=O-A0001-001","type":"rawData","publisherContactName":"蔡先生","fieldDesc":"STID、STNM、TIME、LAT、LON、ELEV、WDIR、WDSD、TEMP、HUMD、PRES、H_24R、H_FX、H_XD、H_FXT、CITY、CITY_SN、TOWN、TOWN_SN","dataid":"O-A0001-001","landingPage":"https://opendata.cwb.gov.tw/opendatadoc/DIV2/A0001-001.pdf","publisher":"中央氣象局","accrualPeriodicity":"1小時","license":"政府資料開放授權條款-第1版","licenseURL":"http://data.gov.tw/license","cost":"免費","characterSetCode":"UTF-8","publisherContactPhone":"02-23497970","format":["JSON","XML"]}};
    res.json(data);
  
});

router.get('/datasetContent/:dataid', function(req, res) {
    var data = {"success":"true","result":{"resource_id":"O-A0001-001","fields":[{"id":"lat","type":"Double"},{"id":"lon","type":"Double"},{"id":"locationName","type":"String"},{"id":"stationId","type":"String"},{"id":"description","type":"String"},{"id":"elementName","type":"String"},{"id":"elementValue","type":"Double"},{"id":"parameterName","type":"String"},{"id":"parameterValue","type":"String"}]},"records":{"location":[{"lat":"24.603167","lon":"120.992083","locationName":"南庄","stationId":"C0E430","time":{"obsTime":"2018-03-19 17:00:00"},"weatherElement":[{"elementName":"ELEV","elementValue":"258.0"},{"elementName":"WDIR","elementValue":"0"},{"elementName":"WDSD","elementValue":"0.0"},{"elementName":"TEMP","elementValue":"21.1"},{"elementName":"HUMD","elementValue":"0.91"},{"elementName":"PRES","elementValue":"983.8"},{"elementName":"SUN","elementValue":"-99"},{"elementName":"H_24R","elementValue":"0.0"},{"elementName":"H_FX","elementValue":"-99"},{"elementName":"H_XD","elementValue":"-99"},{"elementName":"H_FXT","elementValue":"-99"}],"parameter":[{"parameterName":"CITY","parameterValue":"苗栗縣"},{"parameterName":"CITY_SN","parameterValue":"11"},{"parameterName":"TOWN","parameterValue":"南庄鄉"},{"parameterName":"TOWN_SN","parameterValue":"092"}]}]}};
    res.json(data);
});

module.exports = router;