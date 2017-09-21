var express = require('express');
var router = express.Router();
var housesDao=require('./../dao/housesDAO').housesDao;

/* GET home page. */
router.get('/', function(req, res, next) {
  housesDao.getAllHouses(function (result) {
      console.log("houseRoute");
      if(result.length==0){
        res.json(null);
      }else{
        res.json(result);
      }
  })
});

//获取看房记录
router.post('/getArrInfo', function(req, res, next) {
    var house = req.body;
    if(house){
        console.log("getArrInfo:houseId"+house.houseId);
        housesDao.getArrInfo(house.houseId,function (result) {
            console.log("arrangeInfo");
            if(result.length==0){
                res.json(null);
            }else{
                res.json(result);
            }
        })
    }


});
//添加看房信息
router.post('/addArrInfo', function(req, res, next) {
    var arrInfo = req.body;
    arrInfo.adate = new Date();
    console.log(arrInfo);
    if(arrInfo){
        console.log(arrInfo);
        housesDao.addArrInfo(arrInfo,function (result) {
            console.log("addArrInfo");
            if(result.affectedRows==1){
                res.json({"stateCode":15});
            }else{
                res.json({"stateCode":16});            }
        })
    }


});

//添加房源
router.post('/addHouse', function(req, res, next) {
    var house = req.body;
    house.publishTime = new Date();
    console.log(house.publishTime);
    if(house){
        housesDao.addHouse(house,function (result) {

            if(result.affectedRows==1){
                res.json({"stateCode":11});
            }else{
                res.json({"stateCode":12});
            }
        })
    }


});

//获取关注人数
router.post('/getFocusNum', function(req, res, next) {
    var house = req.body;
    if(house){
        console.log("getFocusNum:houseId"+house.houseId);
        housesDao.getFocusNum(house.houseId,function (result) {
            console.log("getFocusNum");
            if(result.length==0){
                res.json(null);
            }else{
                res.json(result);
            }
        })
    }
});

module.exports = router;
