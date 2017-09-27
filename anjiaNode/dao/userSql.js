/**
 * Created by lzhan on 2017/8/25.
 */
exports.sql={
    getPasswordById:'select * from user where telephone=?',
    addUser:'insert into user(userName,telephone,password) values(?,?,?)',
    createToken:'update user set token=? where telephone=?',
    getUserIcon:'select user_icon.icon from user inner join user_icon ON user.id=user_icon.user_id where user.telephone=? order by upload_date desc ',
    addUserIcon:'call addUserIcon(?,?,@res)',
    getFocusHouses:'select * from focusinfo where userId = ?',
    getRecord:'select * from arrangeinfo where userId = ? order by status',
    getMyRecord:'select * from arrangeinfo where ownerId = ? order by status',
    getMyHouses:"select * from housesinfo  where ownerId = ?",
    delRecord:"delete from arrange where  userId = ? and houseId = ?",
    delRecordByarrId:"delete from arrange where  arrangeId = ?",
    getUserInfo:"select * from user where id = ?",
    editUser:"update user set userName = ?,telephone = ?,email = ?,personInfo = ? where id = ?",
    editPass:"update user set password = ? where id = ? and password = ?",
    getMyask:"select * from arrangeinfo where userId  = ? and status = 1",

};