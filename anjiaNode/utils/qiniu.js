// /**
//  * Created by Jdsoon on 2017/9/21.
//  */
var moment = require("moment");
var expires = moment().add(100, 'days');
console.log(expires.toDate()+"   "+expires.valueOf());
// var qiniu = require("qiniu");
//
// //需要填写你的 Access Key 和 Secret Key
// qiniu.conf.ACCESS_KEY = 'Ulg_mgLt7ByWKL4h2_fF1Gt80YShyr3a89lHaUnM';
// qiniu.conf.SECRET_KEY = 'BtyqrS6q6IurvjjhMlVYeioyMFFst8LNQrEpKD9l';
//
// //要上传的空间
// bucket = 'anjia';
//
// //上传到七牛后保存的文件名
// key = 'my-nodejs-logo.png';
//
// //构建上传策略函数，设置回调的url以及需要回调给业务服务器的数据
// function uptoken(bucket, key) {
//     var putPolicy = new qiniu.rs.PutPolicy(bucket+":"+key);
//     putPolicy.callbackUrl = 'http://your.domain.com/callback';
//     putPolicy.callbackBody = 'filename=$(fname)&filesize=$(fsize)';
//     return putPolicy.token();
// }
//
// //生成上传 Token
// token = uptoken(bucket, key);
// console.log(token);
// //要上传文件的本地路径
// filePath = './nodejs-logo.png'
//
// //构造上传函数
// function uploadFile(uptoken, key, localFile) {
//     var extra = new qiniu.io.PutExtra();
//     qiniu.io.putFile(uptoken, key, localFile, extra, function(err, ret) {
//         if(!err) {
//             // 上传成功， 处理返回值
//             console.log(ret.hash, ret.key, ret.persistentId);
//         } else {
//             // 上传失败， 处理返回代码
//             console.log(err);
//         }
//     });
// }
//
// //调用uploadFile上传
// uploadFile(token, key, filePath);
