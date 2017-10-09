/**
 * Created by lzhan on 2017/8/25.
 */
exports.sql={
    getAllHouses:'select * from housesinfo',
    getArrInfo:'select * from arrangeinfo  where houseId=? and status = 2',
    getFocusNum:'select count(houseId)  focusNum from focusinfo where houseId = ?',
    addHouse:'insert into houses(houseName,housePrice,publishTime,houseTypeId,ownerId,area,areaName,address,floor)values(?,?,?,?,?,?,?,?,?)',
    addArrInfo:"update arrange set adate = ?,comment = ?,status = 2 where userId = ? and houseId = ?",
    checkAgree:'select * from arrange where userId = ? and houseId =? and arrangeId=? and status = 2',
    agree:"update arrange set agreeNum=agreeNum+1,agreePerson=CONCAT(agreePerson,'\,',?) where arrangeId = ? and not FIND_IN_SET(?,agreePerson) and status = 2",
    focus:"insert into focus(userId,houseId) SELECT ?, ? FROM DUAL WHERE not exists (select id from focus where userId = ? and houseId = ?)",
    unFocus:"delete from focus where  userId = ? and houseId = ?",
    delHouse:"delete from houses where  houseId = ?",
    getNews:"select * from news ",
    getNewsById:"select * from news where id = ?",
    editHouse:"update houses set houseName = ? where houseId = ?",
    isFocus:"select count(*) num from focus where userId = ? and houseId = ?",
    isAsk:"select count(*) num from arrange where userId = ? and houseId = ?",
    askWatch:"insert into arrange(userId,houseId) SELECT ?, ? FROM DUAL WHERE not exists (select * from arrange where userId = ? and houseId = ?) ",
    getArrInfoByArrId:"select * from arrangeinfo where arrangeId = ?",
    agreeWatch:"update arrange set status = 1 where arrangeId = ?",

};