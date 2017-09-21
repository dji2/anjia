var pool=require('./db_pool').pool;
var housesSql=require('./../dao/housesSql').sql;
exports.housesDao={
    getAllHouses:function (callback) {
        pool.getConnection(function (error,client) {
            if(error){
                return
            }
            client.query(housesSql.getAllHouses,function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }

                callback(result);
                client.release();
            })
        })
    },
    //添加房源
    addHouse:function (house,callback) {
        pool.getConnection(function (error,client) {
            if(error){
                console.log("error");
                return
            }
            client.query(housesSql.addHouse,[house.houseName,house.housePrice,house.publishTime,house.houseTypeId,house.ownerId,house.area,house.areaName,house.address,house.floor],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }

                callback(result);
                client.release();
            })
        })
    },

    //获取看房记录信息
    getArrInfo:function (houseId,callback) {
        pool.getConnection(function (error,client) {
            if(error){
                console.log("error");
                return
            }
            client.query(housesSql.getArrInfo,[houseId],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }

                callback(result);
                client.release();
            })
        })
    },
    //添加看房记录信息
    addArrInfo:function (arrInfo,callback) {
        pool.getConnection(function (error,client) {
            if(error){
                console.log("error");
                return
            }
            client.query(housesSql.addArrInfo,[arrInfo.userId,arrInfo.houseId,arrInfo.adate,arrInfo.comment],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }

                callback(result);
                client.release();
            })
        })
    },

    getFocusNum:function (houseId,callback) {
        pool.getConnection(function (error,client) {
            if(error){
                console.log("error");
                return
            }
            client.query(housesSql.getFocusNum,[houseId],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }

                callback(result);
                client.release();
            })
        })
    }
}


