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
//获取
router.get('/getArrInfo', function(req, res, next) {


    housesDao.getArrInfo(function (result) {
        console.log("arrangeInfo");
        if(result.length==0){
            res.json(null);
        }else{
            res.json(result);
        }
    })
});

module.exports = router;
