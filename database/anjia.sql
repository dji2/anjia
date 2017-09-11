/*
Navicat MySQL Data Transfer

Source Server         : mysql
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : anjia

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-09-11 09:33:40
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
-- Table structure for arrangeinfo
-- ----------------------------
DROP TABLE IF EXISTS `arrangeinfo`;
CREATE TABLE `arrangeinfo` (
  `arrangeId` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `houseId` int(11) DEFAULT NULL,
  `adate` datetime DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`arrangeId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of arrangeinfo
-- ----------------------------

-- ----------------------------
-- Table structure for collect
-- ----------------------------
DROP TABLE IF EXISTS `collect`;
CREATE TABLE `collect` (
  `collectId` int(11) NOT NULL,
  `houseId` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  PRIMARY KEY (`collectId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of collect
-- ----------------------------

-- ----------------------------
-- Table structure for house
-- ----------------------------
DROP TABLE IF EXISTS `house`;
CREATE TABLE `house` (
  `houseId` int(11) NOT NULL AUTO_INCREMENT,
  `houseName` varchar(255) DEFAULT NULL,
  `housePrice` varchar(255) DEFAULT NULL COMMENT '价格',
  `publishTime` datetime DEFAULT NULL COMMENT '发布时间',
  `houseAreaId` int(11) DEFAULT NULL COMMENT '小区ID',
  `houseInfo` varchar(255) DEFAULT NULL COMMENT '房屋配置信息',
  `houseTypeId` int(11) DEFAULT NULL COMMENT '房屋类型',
  `ownerId` int(11) DEFAULT NULL,
  `area` float DEFAULT NULL COMMENT '房屋面积',
  `startTime` datetime DEFAULT NULL COMMENT '开始出租时间',
  `endTime` datetime DEFAULT NULL,
  `houseStatus` varchar(255) DEFAULT NULL COMMENT '房屋状态',
  PRIMARY KEY (`houseId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of house
-- ----------------------------

-- ----------------------------
-- Table structure for houseareas
-- ----------------------------
DROP TABLE IF EXISTS `houseareas`;
CREATE TABLE `houseareas` (
  `houseAreaId` int(11) NOT NULL AUTO_INCREMENT,
  `introduce` varchar(255) DEFAULT NULL,
  `traffic` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`houseAreaId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of houseareas
-- ----------------------------

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
-- Table structure for housetype
-- ----------------------------
DROP TABLE IF EXISTS `housetype`;
CREATE TABLE `housetype` (
  `houseTypeId` int(11) NOT NULL AUTO_INCREMENT,
  `room` int(11) DEFAULT NULL,
  `livingroom` int(11) DEFAULT NULL COMMENT '客厅',
  `bathroom` int(11) DEFAULT NULL COMMENT '洗手间',
  `kitchen` int(11) DEFAULT NULL COMMENT '厨房',
  `balcony` int(11) DEFAULT NULL COMMENT '阳台',
  `aspect` varchar(255) DEFAULT NULL COMMENT '房屋朝向',
  PRIMARY KEY (`houseTypeId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of housetype
-- ----------------------------

-- ----------------------------
-- Table structure for owner
-- ----------------------------
DROP TABLE IF EXISTS `owner`;
CREATE TABLE `owner` (
  `ownerId` int(11) NOT NULL AUTO_INCREMENT,
  `ownerName` varchar(255) DEFAULT NULL,
  `ownerTelephone` varchar(255) DEFAULT NULL,
  `ownerAddress` varchar(255) DEFAULT NULL,
  `ownerEmail` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ownerId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of owner
-- ----------------------------

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `userId` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) DEFAULT NULL,
  `telephone` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------

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
