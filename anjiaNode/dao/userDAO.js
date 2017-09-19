/**
 * Created by lzhan on 2017/8/25.
 */
var pool=require('./db_pool').pool;
var userSql=require('./userSql').sql;
exports.userDao={
    getPasswordById:function (telephone,callback) {
        pool.getConnection(function (error,client) {
            if(error){
                console.log('error');
                return;
            }
            console.log('userDao');
            client.query(userSql.getPasswordById,[telephone],function (error,result) {
                if(error){
                    console.log(error.message+' from getpasswordbyid');
                    callback('e004');
                    return;
                }

                callback(result);
                client.release();
            })
        })
    },
    addUser:function (user,callback) {

        this.getPasswordById(user.telephone,function (result) {
            if(result.length==0){
                pool.getConnection(function (error,client) {
                    if(error){
                        console.log("数据库连接错误");
                        return;
                    }
                    client.query(userSql.addUser,[user.userName,user.telephone,user.password,'',81],function (error,result) {
                        if(error){
                            callback('e004');
                            return;
                        }
                        console.log("影响的行数"+result.affectedRows);
                        callback(result.affectedRows);

                        client.release();
                    })
                })
            }else {
                callback('5');
            }


        })


    },
    createToken:function (telephone,token,callback) {
        pool.getConnection(function (error,client) {
            if(error){
                return
            }
            client.query(userSql.createToken,[token,telephone],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }

                callback(result);
                client.release();
            })
        })
    },
    getUserIcon:function (telephone,callback) {
        pool.getConnection(function (error,client) {
            if(error){
                return
            }
            client.query(userSql.getUserIcon,[telephone],function (error,result) {
                if(error){
                    console.log(error.message+' from getpasswordbyid');
                    callback('e004');
                    return;
                }

                callback(result);
                client.release();
            })
        })
    },
    addUserIcon:function (telephone,iconName,callback) {
        pool.getConnection(function (error,client) {
            if(error){
                callback('e004');
                return;
            }
            client.query(userSql.addUserIcon,[telephone,iconName],function (error,result) {
                if(error){
                    console.log(error.message+' from getpasswordbyid');
                    callback('e004');
                    return;
                }

                callback(result[0][0].result);
                // console.log(result[0][0].result);
                client.release();
            })
        })
    },
    getFocusHouses:function (userId,callback) {
        pool.getConnection(function (error,client) {
            if(error){
                console.log("error");
                return
            }
            client.query(userSql.getFocusHouses,[userId],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }

                callback(result);
                client.release();
            })
        })
    },
    getRecord:function (userId,callback) {
        pool.getConnection(function (error,client) {
            if(error){
                console.log("error");
                return
            }
            client.query(userSql.getRecord,[userId],function (error,result) {
                if(error){
                    callback('e004');
                    console.log("getRecord--error");
                    return;
                }

                callback(result);
                client.release();
            })
        })
    }
}