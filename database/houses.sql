/*
Navicat MySQL Data Transfer

Source Server         : mysqlServer
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : anjia

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-09-18 13:48:01
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for houses
-- ----------------------------
DROP TABLE IF EXISTS `houses`;
CREATE TABLE `houses` (
  `houseId` int(11) NOT NULL AUTO_INCREMENT,
  `houseName` varchar(255) DEFAULT NULL,
  `housePrice` varchar(255) DEFAULT NULL COMMENT '价格',
  `publishTime` date DEFAULT NULL COMMENT '发布时间',
  `houseAreaId` int(11) DEFAULT NULL COMMENT '小区ID',
  `houseInfo` varchar(255) DEFAULT NULL COMMENT '房屋配置信息',
  `houseTypeId` int(11) DEFAULT NULL COMMENT '房屋类型',
  `ownerId` int(11) DEFAULT NULL,
  `area` float DEFAULT NULL COMMENT '房屋面积',
  `startTime` date DEFAULT NULL COMMENT '开始出租时间',
  `endTime` date DEFAULT NULL,
  `houseStatus` varchar(255) DEFAULT NULL COMMENT '房屋状态',
  PRIMARY KEY (`houseId`),
  KEY `areasId` (`houseAreaId`),
  KEY `typeId` (`houseTypeId`),
  KEY `owner` (`ownerId`),
  CONSTRAINT `areasId` FOREIGN KEY (`houseAreaId`) REFERENCES `houseareas` (`id`),
  CONSTRAINT `owner` FOREIGN KEY (`ownerId`) REFERENCES `owner` (`id`),
  CONSTRAINT `typeId` FOREIGN KEY (`houseTypeId`) REFERENCES `housetype` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of houses
-- ----------------------------
INSERT INTO `houses` VALUES ('1', '实地看房，钥匙在店，空气清新，上门实拍', '3300', '2017-09-11', '1', null, '1', '1', '90', '2017-09-15', '2018-09-15', '待出租');
INSERT INTO `houses` VALUES ('2', '空气清新，实地看房，小户型', '2500', '2017-09-13', '1', null, '1', '1', '67', '2017-10-05', '2018-05-25', '待出租');
INSERT INTO `houses` VALUES ('3', '人气房源，适合自住，要是在安家，采光棒', '3000', '2017-09-13', '2', null, '2', '1', '87', '2017-09-28', '2018-04-20', '待出租');
INSERT INTO `houses` VALUES ('4', '交通方便，高清实拍，高区景观房', '2000', '2017-09-13', '2', null, '2', '1', '67', '2017-09-21', '2018-05-24', '待出租');
INSERT INTO `houses` VALUES ('5', '三元二村，出行方便，高清照片，人气房源', '2100', '2017-09-14', '2', null, '3', '1', '34', '2017-09-07', '2017-09-27', '待出租');
INSERT INTO `houses` VALUES ('6', '石湖华城，交通方便，空气清新，钥匙在店', '3500', '2017-09-14', '2', null, '2', '1', '55', '2017-09-13', '2017-09-28', '待出租');
INSERT INTO `houses` VALUES ('7', '光线棒，温馨一室，附近有地铁，有钥匙', '1900', '2017-09-13', '1', null, '3', '1', '54', '2017-09-19', '2017-09-21', '待出租');
INSERT INTO `houses` VALUES ('8', '安家好房，实地看房，适合自住，交通方便', '3000', '2017-09-20', '2', null, '2', '1', '64', '2017-09-21', '2017-09-23', '待出租');
INSERT INTO `houses` VALUES ('9', '朗诗东吴绿郡，出行方便，上门实勘，实地看房', '5000', '2017-09-15', '2', null, '2', '1', '34', '2017-09-15', '2017-09-20', '待出租');
INSERT INTO `houses` VALUES ('10', '中茵皇冠国际，附近有地铁，看房有钥匙，大气四室', '16000', '2017-09-13', '2', null, '3', '1', '67', '2017-09-14', '2017-09-16', '待出租');
INSERT INTO `houses` VALUES ('11', '三元二村，看房有钥匙，光线充足，有爱有家', '1800', '2017-09-22', '1', null, '2', '1', '45', '2017-09-22', '2017-09-29', '待出租');
INSERT INTO `houses` VALUES ('12', '中海国际，交通方便，安家有钥匙，新鲜好房', '3800', '2017-09-06', '1', null, '3', '1', '40', '2017-09-07', '2017-09-16', '待出租');
INSERT INTO `houses` VALUES ('13', '后文家巷，高区采光好，附近有地铁，适合自住', '2200', '2017-10-02', '2', null, '1', '1', '21', '2017-10-03', '2017-10-13', '待出租');
INSERT INTO `houses` VALUES ('14', '海尚壹品，好房好心情，1室1厅1卫，近地铁', '3100', '2017-09-13', '2', null, '1', '1', '45', '2017-09-13', '2017-09-20', '待出租');
INSERT INTO `houses` VALUES ('15', '锦和加州北区，生活很便利，实地看房，钥匙在安家', '2400', '2017-09-15', '1', null, '2', '1', '55', '2017-09-15', '2017-09-22', '待出租');
