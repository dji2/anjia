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
    },
    //检查是否点过赞
    checkAgree:function (arrangeInfo,callback) {
        pool.getConnection(function (error,client) {
            if(error){
                console.log("error");
                return;
            }
            client.query(housesSql.checkAgree,[arrangeInfo.userId,arrangeInfo.houseId,arrangeInfo.arrangeId],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }

                callback(result);
                client.release();
            })
        })
    },
    //点赞
    agree:function (arrangeInfo,callback) {
        this.checkAgree(arrangeInfo,function (result) {
            if(result.length==0){
                pool.getConnection(function (error,client) {
                    if(error){
                        console.log("数据库连接错误");
                        return;
                    }
                    client.query(housesSql.agree,[arrangeInfo.arrangeId],function (error,result) {
                        if(error){
                            callback('e004');
                            return;
                        }
                        console.log("点赞成功"+result.affectedRows);
                        console.log(result);
                        callback(result);

                        client.release();
                    })
                })
            }else {
                callback('19');
            }


        })

    }

}


