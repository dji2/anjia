/**
 * Created by lzhan on 2017/8/25.
 */
exports.sql={
    getAllHouses:'select * from housesinfo',
    getArrInfo:'select * from arrangeinfo  where houseId=?',
    getFocusNum:'select count(houseId)  focusNum from focusinfo where houseId = ?',
    addHouse:'insert into houses(houseName,housePrice,publishTime,houseTypeId,ownerId,area,areaName,address,floor)values(?,?,?,?,?,?,?,?,?)',
    addArrInfo:"insert into arrange(userId,houseId,adate,comment) values(?,?,?,?)",
    checkAgree:'select * from arrange where userId = ? and houseId =? and arrangeId=?',
    agree:"update arrange set agreeNum=agreeNum+1,agreePerson=CONCAT(agreePerson,'\,',?) where arrangeId = ? and not FIND_IN_SET(?,agreePerson)",
    focus:"insert into focus(userId,houseId) SELECT ?, ? FROM DUAL WHERE not exists (select id from focus where userId = ? and houseId = ?)",
    unFocus:"delete from focus where  userId = ? and houseId = ?",
    delHouse:"delete from houses where  houseId = ?",
    getNews:"select * from news ",
    editHouse:"update houses set houseName = ? where houseId = ?",
    isFocus:"select count(*) num from focus where userId = ? and houseId = ?"
};