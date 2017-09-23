/**
 * Created by lzhan on 2017/8/25.
 */
exports.sql={
    getAllHouses:'select * from housesinfo',
    getArrInfo:'select * from arrangeinfo  where houseId=?',
    getFocusNum:'select sum(houseId) from focusinfo where houseId = ?',
    addHouse:'insert into houses(houseName,housePrice,publishTime,houseTypeId,ownerId,area,areaName,address,floor)values(?,?,?,?,?,?,?,?,?)',
    addArrInfo:"insert into arrange(userId,houseId,adate,comment) values(?,?,?,?)",
    checkAgree:'select * from arrange where userId = ? and houseId =? and arrangeId=?',
    agree:"update arrange set agreeNum=agreeNum+1 where arrangeId = ?"
};