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


