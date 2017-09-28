var express = require('express');
var router = express.Router();
var util = require('./../utils/util');
var formidable=require('formidable');
var AVATAR_UPLOAD_FOLDER='/uploads/';
var fs = require('fs');
var userdao = require('./../dao/userDAO').userDao;
var sms = require('./../utils/sendMessage');
var checkCode="121212";


//产生令牌
var jwt = require("jwt-simple");
var moment = require("moment");

var ct = require("../utils/checkToken");

//发送验证码
router.post('/check', function (req, res, next) {
    var user = req.body;
    console.log(user);
    checkCode  =parseInt(Math.random()*1000000) ;
    var obj = {
        PhoneNumbers: '18362202673',
        TemplateCode: 'SMS_95040006',//模板编号
        TemplateParam: '{"number":"1314520"}',//变量名
    };
    obj.PhoneNumbers = user.telephone;
    var o = JSON.parse(obj.TemplateParam);
    o.number = checkCode;
    console.log(o.number);
    obj.TemplateParam = JSON.stringify(o);
    sms.sendMessage(obj.PhoneNumbers,obj.TemplateCode,obj.TemplateParam,function(data){
        console.log(data);
    });
    res.json({"stateCode": 10});

});

router.get('/login', function (req, res, next) {
    var user = req.query;
    console.log('here');
    console.log(user);
    res.json({"stateCode": 3});
});

//登录
router.post('/login',function (req, res, next) {
    console.log("route login");
    var user = req.body;
    if (user) {
        console.log(user);

            userdao.getPasswordById(user.telephone, function (result) {
                console.log(result);
                if (result == 'e004') {
                    res.json({"stateCode": result});
                } else {
                    if (result.length == 0) {
                        res.json({"stateCode": 3});
                    } else {
                        if (result[0].password == util.MD5(user.password)) {

                            //产生令牌
                            var expires = moment().add(100, 'days').valueOf();
                            console.log(expires);
                            var token = jwt.encode({
                                iss: user.telephone,
                                exp: expires
                            }, util.secret);
                            res.json({"stateCode": 1,token:token,userName:result[0].userName,userId:result[0].id});

                        } else {
                            res.json({"stateCode": 2});
                        }
                    }
                }
            })
    }
});


//获取关注房源
router.post('/getFocusHouses',ct.checkToken, function (req, res, next) {
    var user = req.body;
    if(user){
        console.log("getFocusHouses:id"+user.userId);
        userdao.getFocusHouses(user.userId,function (result) {
            console.log("getFocusHouses");
            if(result.length==0){
                res.json(null);
            }else{
                res.json(result);
            }
        })
    }
});
//获取我的房源
router.post('/getMyHouses',ct.checkToken, function (req, res, next) {
    var user = req.body;
    console.log(user);
    if(user){
        console.log("getMyHouses:id"+user.userId);
        userdao.getMyHouses(user.userId,function (result) {
            console.log("getMyHouses");
            if(result.length==0){
                res.json(null);
            }else{
                res.json(result);
            }
        })
    }
});

//修改个人信息
router.post('/editUser',ct.checkToken, function (req, res, next) {
    var user = req.body;
    console.log(user);
    if(user){
        console.log("editUser:id"+user.userId);
        userdao.editUser(user,function (result) {
            console.log("editUser");
            if(result.affectedRows > 0){
                res.json({"stateCode":35});
            }else{
                res.json({"stateCode":36});
            }
        })
    }
});
//获取个人信息
router.post('/getUserInfo',ct.checkToken, function (req, res, next) {
    var user = req.body;
    console.log(user);
    if(user){
        console.log("getUserInfo:id"+user.userId);
        userdao.getUserInfo(user,function (result) {
            if(result.length == 0){
                res.json({"stateCode":48});
            }else{
                res.json(result);
            }
        })
    }
});
//修改密码
router.post('/editPass',ct.checkToken, function (req, res, next)    {
    var user = req.body;
    console.log(user);
    user.password = util.MD5(user.password);
    user.newPass = util.MD5(user.newPass);
    if(user){
        console.log("editPass:id"+user.userId);
        userdao.editPass(user,function (result) {
            console.log(result);
            if(result.affectedRows == 1){
                res.json({"stateCode":37});
            }else{
                res.json({"stateCode":38});
            }
        })
    }
});

// 获取看房记录
router.post('/getRecord',ct.checkToken, function (req, res, next) {
    var user = req.body;
    if(user){
        console.log("getRecord:id"+user.userId);
        userdao.getRecord(user.userId,function (result) {
            console.log("getRecord");
            if(result.length==0){
                res.json(null);
            }else{
                res.json(result);
            }
        })
    }
});

// 获取看房记录（业主）
router.post('/getMyRecord',ct.checkToken, function (req, res, next) {
    var user = req.body;
    if(user){
        console.log("getMyRecord:id"+user.userId);
        userdao.getMyRecord(user.userId,function (result) {
            console.log("getMyRecord");
            if(result.length==0){
                res.json(null);
            }else{
                res.json(result);
            }
        })
    }
});

// 删除看房记录
router.post('/delRecord',function (req, res, next) {
    var arrInfo = req.body;
    console.log(arrInfo)
    if(arrInfo){
        console.log("delRecord:id");
        userdao.delRecord(arrInfo,function (result) {
            console.log("delRecord");
            if(result.affectedRows > 0){
                res.json({"stateCode": 25});
            }else{
                res.json({"stateCode": 26});
            }
        })
    }
});

// 删除看房记录(业主)
router.post('/delRecordByarrId',function (req, res, next) {
    var arrInfo = req.body;
    console.log(arrInfo)
    if(arrInfo){
        userdao.delRecordByarrId(arrInfo,function (result) {
            console.log(result);
            if(result.affectedRows > 0){
                res.json({"stateCode": 45});
            }else{
                res.json({"stateCode": 46});
            }
        })
    }
});
// 注册
router.post('/regist', function (req, res, next) {
    console.log("route regist");
    var user  = req.body;
    console.log("checkcode"+checkCode);
    if(user){
        console.log(user);
        if(user.code == checkCode){
            user.password=util.MD5(user.password);
            console.log(user);
            userdao.addUser(user,function (result) {

                if(result.affectedRows == 1){
                    //产生令牌
                    var expires = moment().add(7, 'days').valueOf();
                    var token = jwt.encode({
                        iss: user.telephone,
                        exp: expires
                    }, util.secret);
                    res.json({"stateCode": 6,"token":token,"userId":result.insertId,"userName":user.userName});

                    console.log("注册成功");
                }else if(result == 5){
                    res.json({"stateCode": 5});
                    console.log("用户已存在");
                } else{
                    res.json({"stateCode": 7});
                    console.log("注册失败");
                }
            });
        }else{
            res.json({"stateCode": 9});
        }

    }
});

// 更新头像
router.post('/upload', function (request, response, next) {
    var form = new formidable.IncomingForm();   //创建上传表单
    form.encoding = 'utf-8';
    form.parse(request, function (err, fields, files) {
        console.log(files);
        if (err) {
            console.log('upload e005');
            response.locals.error = err;
            response.json({"stateCode":'e005'});
            return;
        }
        console.log(fields);
        var extName = '';  //后缀名
        switch (files.user_icon.type) {
            case 'image/jpeg':
                extName = 'jpeg';
                break;
            case 'image/jpg':
                extName = 'jpg';
                break;
            case 'image/png':
                extName = 'png';
                break;
            case 'image/x-png':
                extName = 'png';
                break;
        }
        if(extName.length == 0){
            response.json({"stateCode":'e005'});
            console.log('图片格式不正确');
            return;
        } else{
            form.uploadDir = "../public"+AVATAR_UPLOAD_FOLDER;     //设置上传目录
            form.keepExtensions = true;     //保留后缀
            form.maxFieldsSize = 10* 1024;   //文件大小
            var avatarName = util.createUnique() + '.' + extName;
            // 'public/uploads/d23242343242.jpg'
            var newPath = form.uploadDir + avatarName;
            console.log("newpath---"+newPath);
            // fs.renameSync(files.user_icon.path, newPath);  //重命名

            console.log(files.user_icon.path);
            // fs.renameSync(files.user_icon.path,newPath);
            fs.rename(files.user_icon.path, newPath,function (error) {
                if(error){
                    console.log('rename error'+error.message);
                    response.json({"stateCode":'e005'});
                    return
                }
                userdao.addUserIcon(fields.userId,avatarName,function (result) {
                    if(result==1){
                        response.json({"stateCode":1});
                    }else{
                        response.json({"stateCode":0});
                    }
                })
            })

        }

    })



});


router.post('/getUserIcon', function (req, res, next) {
    var user_telephone=req.body.telephone;
    userdao.getUserIcon(user_telephone,function (result) {
        if(result.length==0){
            res.json({"icon":"icon_default.jpg"});
        }else {
            res.json({"icon":result[0].icon});
        }
    })
});

module.exports = router;
