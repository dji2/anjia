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
    //修改房源信息（仅限方圆名称）
    editHouse:function (house,callback) {
        pool.getConnection(function (error,client) {
            if(error){
                console.log("error");
                return
            }
            client.query(housesSql.editHouse,[house.houseName,house.houseId],function (error,result) {
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


    //获取所有头条
    getNews:function (callback) {
        pool.getConnection(function (error,client) {
            if(error){
                console.log("error");
                return
            }
            client.query(housesSql.getNews,function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }

                callback(result);
                client.release();
            })
        })
    },



    //通过id获取所有头条
    getNewsById:function (newsId,callback) {
        pool.getConnection(function (error,client) {
            if(error){
                console.log("error");
                return
            }
            client.query(housesSql.getNewsById,[newsId],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }

                callback(result);
                client.release();
            })
        })
    },



    //通过arrangeId获取看房记录
    getArrInfoByArrId:function (arrangeId,callback) {
        pool.getConnection(function (error,client) {
            if(error){
                console.log("error");
                return
            }
            client.query(housesSql.getArrInfoByArrId,[arrangeId],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }
                console.log(result[0]);
                callback(result[0]);
                client.release();
            })
        })
    },

    //用户评论完成整个看房流程
    addArrInfo:function (arrInfo,callback) {
        pool.getConnection(function (error,client) {
            if(error){
                console.log("error");
                return
            }
            client.query(housesSql.addArrInfo,[arrInfo.adate,arrInfo.comment,arrInfo.userId,arrInfo.houseId],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }

                callback(result);
                client.release();
            })
        })
    },

    //用户提出看房申请
    askWatch:function (arrInfo,callback) {
        pool.getConnection(function (error,client) {
            if(error){
                console.log("error");
                return
            }
            client.query(housesSql.askWatch,[arrInfo.userId,arrInfo.houseId,arrInfo.userId,arrInfo.houseId],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }

                callback(result);
                client.release();
            })
        })
    },

    //业主同意看房申请
    agreeWatch:function (arrInfo,callback) {
        pool.getConnection(function (error,client) {
            if(error){
                console.log("error");
                return
            }
            client.query(housesSql.agreeWatch,[arrInfo.arrangeId],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }

                callback(result);
                client.release();
            })
        })
    },
    //获取关注人数
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
                    client.query(housesSql.agree,[arrangeInfo.userId,arrangeInfo.arrangeId,arrangeInfo.userId],function (error,result) {
                        if(error){
                            callback('e004');
                            return;
                        }
                        console.log(result);
                        callback(result);

                        client.release();
                    })
                })
            }else {
                callback('19');
            }


        })

    },


    //关注房源
    focus:function (focusInfo,callback) {
        pool.getConnection(function (error,client) {
            if(error){
                console.log("error");
                return;
            }
            client.query(housesSql.focus,[focusInfo.userId,focusInfo.houseId,focusInfo.userId,focusInfo.houseId],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }

                callback(result);
                client.release();
            })
        })

    },
    //判断当前用户是否关注该房源
    isFocus:function (focusInfo,callback) {
        pool.getConnection(function (error,client) {
            if(error){
                console.log("error");
                return;
            }
            client.query(housesSql.isFocus,[focusInfo.userId,focusInfo.houseId],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }
                console.log(result)
                callback(result);
                client.release();
            })
        })

    },

    //判断当前用户是否已经预约看房
    isAsk:function (arrangeInfo,callback) {
        pool.getConnection(function (error,client) {
            if(error){
                console.log("error");
                return;
            }
            client.query(housesSql.isAsk,[arrangeInfo.userId,arrangeInfo.houseId],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }
                console.log(result)
                callback(result);
                client.release();
            })
        })

    },
    //取消关注房源
    unFocus:function (focusInfo,callback) {
        pool.getConnection(function (error,client) {
            if(error){
                console.log("error");
                return;
            }
            client.query(housesSql.unFocus,[focusInfo.userId,focusInfo.houseId,focusInfo.userId,focusInfo.houseId],function (error,result) {
                if(error){
                    callback('e004');
                    return;
                }

                callback(result);
                client.release();
            })
        })

    },


    //删除房源
    delHouse:function (houseInfo,callback) {
        pool.getConnection(function (error,client) {
            if(error){
                console.log("error");
                return;
            }
            client.query(housesSql.delHouse,[houseInfo.houseId],function (error,result) {
                if(error){
                    console.log(error.message)
                    callback('e004');
                    return;
                }
                console.log(result)
                callback(result);
                client.release();
            })
        })

    }
}


