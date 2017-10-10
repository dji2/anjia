/*
Navicat MySQL Data Transfer

Source Server         : mysql
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : anjia

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-10-10 15:32:09
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for agent
-- ----------------------------
DROP TABLE IF EXISTS `agent`;
CREATE TABLE `agent` (
  `agentId` int(11) NOT NULL COMMENT '经纪人',
  `agentName` varchar(255) DEFAULT NULL,
  `agentTelphone` varchar(255) DEFAULT NULL,
  `agentAddress` varchar(255) DEFAULT NULL,
  `agentEmail` varchar(255) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`agentId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of agent
-- ----------------------------

-- ----------------------------
-- Table structure for arrange
-- ----------------------------
DROP TABLE IF EXISTS `arrange`;
CREATE TABLE `arrange` (
  `arrangeId` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) DEFAULT NULL,
  `houseId` int(11) DEFAULT NULL,
  `comment` varchar(255) DEFAULT NULL,
  `adate` datetime DEFAULT NULL,
  `status` int(9) DEFAULT '0',
  `agreeNum` int(11) DEFAULT '0',
  `agreePerson` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`arrangeId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of arrange
-- ----------------------------
INSERT INTO `arrange` VALUES ('1', '3', '2', '这房子真好', '2017-10-04 15:19:56', '0', '0', null);

-- ----------------------------
-- Table structure for focus
-- ----------------------------
DROP TABLE IF EXISTS `focus`;
CREATE TABLE `focus` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `houseId` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of focus
-- ----------------------------
INSERT INTO `focus` VALUES ('1', '1', '1');
INSERT INTO `focus` VALUES ('2', '2', '1');

-- ----------------------------
-- Table structure for houseareas
-- ----------------------------
DROP TABLE IF EXISTS `houseareas`;
CREATE TABLE `houseareas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `areaName` varchar(255) DEFAULT NULL COMMENT '小区名称',
  `introduce` varchar(255) DEFAULT NULL,
  `traffic` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of houseareas
-- ----------------------------
INSERT INTO `houseareas` VALUES ('1', '姑苏 平江新城', '江帆小学 学区房', '距离地铁平江路站523米', '平江路临汾路交界');
INSERT INTO `houseareas` VALUES ('2', '园区 文慧公寓', '高精尖人才集聚', '比邻西交大', '仁爱路一号');

-- ----------------------------
-- Table structure for houseimg
-- ----------------------------
DROP TABLE IF EXISTS `houseimg`;
CREATE TABLE `houseimg` (
  `hImgId` int(255) NOT NULL,
  `houseId` int(11) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `imgDate` datetime DEFAULT NULL,
  PRIMARY KEY (`hImgId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of houseimg
-- ----------------------------

-- ----------------------------
-- Table structure for houses
-- ----------------------------
DROP TABLE IF EXISTS `houses`;
CREATE TABLE `houses` (
  `houseId` int(11) NOT NULL AUTO_INCREMENT,
  `houseName` varchar(255) DEFAULT NULL,
  `housePrice` varchar(255) DEFAULT NULL COMMENT '价格',
  `publishTime` date DEFAULT NULL COMMENT '发布时间',
  `houseTypeId` int(11) DEFAULT NULL COMMENT '房屋类型',
  `ownerId` int(11) DEFAULT NULL,
  `area` float DEFAULT NULL COMMENT '房屋面积',
  `areaName` varchar(255) DEFAULT NULL COMMENT '房屋状态',
  `address` varchar(255) DEFAULT NULL,
  `floor` int(11) DEFAULT NULL,
  PRIMARY KEY (`houseId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of houses
-- ----------------------------
INSERT INTO `houses` VALUES ('1', '实地看房，钥匙在店，空气清新，上门实拍', '3300', '2017-09-11', '1', '2', '90', '姑苏 云鼎鑫城', '园区干将路22号', '2');
INSERT INTO `houses` VALUES ('2', '空气清新，实地看房，小户型', '2500', '2017-09-13', '1', '2', '67', '姑苏 新野小区', '新业路干将路交界处', '34');
INSERT INTO `houses` VALUES ('3', '人气房源，适合自住，要是在安家，采光棒', '3000', '2017-09-13', '2', '2', '87', '姑苏 东塔福居', '东塔路西22号', '5');
INSERT INTO `houses` VALUES ('4', '交通方便，高清实拍，高区景观房', '2000', '2017-09-13', '2', '2', '67', '姑苏 南门小区', '南门二环33号', '2');

-- ----------------------------
-- Table structure for housetype
-- ----------------------------
DROP TABLE IF EXISTS `housetype`;
CREATE TABLE `housetype` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `room` int(11) DEFAULT NULL,
  `livingroom` int(11) DEFAULT NULL COMMENT '客厅',
  `bathroom` int(11) DEFAULT NULL COMMENT '洗手间',
  `kitchen` int(11) DEFAULT NULL COMMENT '厨房',
  `balcony` int(11) DEFAULT NULL COMMENT '阳台',
  `aspect` varchar(255) DEFAULT NULL COMMENT '房屋朝向',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of housetype
-- ----------------------------
INSERT INTO `housetype` VALUES ('1', '1', '1', '1', '1', '1', '朝南');
INSERT INTO `housetype` VALUES ('2', '2', '1', '1', '1', '1', '朝北');
INSERT INTO `housetype` VALUES ('3', '3', '1', '1', '1', '1', '北');

-- ----------------------------
-- Table structure for owner
-- ----------------------------
DROP TABLE IF EXISTS `owner`;
CREATE TABLE `owner` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ownerName` varchar(255) DEFAULT NULL,
  `ownerTelephone` varchar(255) DEFAULT NULL,
  `ownerAddress` varchar(255) DEFAULT NULL,
  `ownerEmail` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of owner
-- ----------------------------
INSERT INTO `owner` VALUES ('1', '嵇德松', '18362202673', '苏州工业园区文慧公寓6栋449', '764922900@qq.com');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) DEFAULT NULL,
  `telephone` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `personInfo` varchar(255) DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('2', 'desong', '18362202673', 'fcea920f7412b5da7be0cf42b8c93759', '764922900@qq.com', '这是个帅气的小伙');
INSERT INTO `user` VALUES ('3', '边龙', '15503878257', 'e10adc3949ba59abbe56e057f20f883e', 'bianlong@qq.com', '真是个帅气的小伙');

-- ----------------------------
-- Table structure for user_icon
-- ----------------------------
DROP TABLE IF EXISTS `user_icon`;
CREATE TABLE `user_icon` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) DEFAULT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `iconDate` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_icon
-- ----------------------------

-- ----------------------------
-- View structure for arrangeinfo
-- ----------------------------
DROP VIEW IF EXISTS `arrangeinfo`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `arrangeinfo` AS select `arrange`.`arrangeId` AS `arrangeId`,`arrange`.`houseId` AS `houseId`,`arrange`.`userId` AS `userId`,`u1`.`userName` AS `userName`,`u1`.`telephone` AS `telephone`,`houses`.`ownerId` AS `ownerId`,`u2`.`userName` AS `ownerName`,`u2`.`telephone` AS `ownerTelephone`,`arrange`.`status` AS `status`,`arrange`.`comment` AS `comment`,`houses`.`houseName` AS `houseName`,`houses`.`housePrice` AS `housePrice`,`arrange`.`adate` AS `publishTime`,`houses`.`area` AS `area`,`houses`.`areaName` AS `areaName`,`houses`.`address` AS `address`,`housetype`.`room` AS `room`,`housetype`.`livingroom` AS `livingroom`,`arrange`.`agreeNum` AS `agreeNum` from ((((`arrange` join `houses` on((`arrange`.`houseId` = `houses`.`houseId`))) join `user` `u1` on((`arrange`.`userId` = `u1`.`id`))) join `housetype` on((`houses`.`houseTypeId` = `housetype`.`id`))) join `user` `u2` on((`houses`.`ownerId` = `u2`.`id`))) ;

-- ----------------------------
-- View structure for focusinfo
-- ----------------------------
DROP VIEW IF EXISTS `focusinfo`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `focusinfo` AS select `focus`.`houseId` AS `houseId`,`focus`.`userId` AS `userId`,`houses`.`houseName` AS `houseName`,`houses`.`housePrice` AS `housePrice`,`houses`.`publishTime` AS `publishTime`,`houses`.`area` AS `area`,`houses`.`areaName` AS `areaName`,`houses`.`address` AS `address`,`houses`.`floor` AS `floor`,`housetype`.`room` AS `room`,`housetype`.`livingroom` AS `livingroom` from ((`focus` join `houses` on((`focus`.`houseId` = `houses`.`houseId`))) join `housetype` on((`houses`.`houseTypeId` = `housetype`.`id`))) ;

-- ----------------------------
-- View structure for housesinfo
-- ----------------------------
DROP VIEW IF EXISTS `housesinfo`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `housesinfo` AS select `houses`.`houseId` AS `houseId`,`houses`.`houseName` AS `houseName`,`houses`.`housePrice` AS `housePrice`,`houses`.`publishTime` AS `publishTime`,`housetype`.`room` AS `room`,`housetype`.`livingroom` AS `livingroom`,`housetype`.`bathroom` AS `bathroom`,`housetype`.`kitchen` AS `kitchen`,`housetype`.`balcony` AS `balcony`,`housetype`.`aspect` AS `aspect`,`user`.`id` AS `ownerId`,`user`.`userName` AS `ownerName`,`user`.`telephone` AS `telphone`,`user`.`personInfo` AS `personInfo`,`houses`.`area` AS `area`,`houses`.`areaName` AS `areaName`,`houses`.`address` AS `address`,`houses`.`floor` AS `floor` from ((`houses` join `housetype` on((`houses`.`houseTypeId` = `housetype`.`id`))) join `user` on((`user`.`id` = `houses`.`ownerId`))) ;
SET FOREIGN_KEY_CHECKS=1;
