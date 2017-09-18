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
    }
}


