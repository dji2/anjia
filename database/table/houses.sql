/*
Navicat MySQL Data Transfer

Source Server         : aliyundata
Source Server Version : 50718
Source Host           : rm-uf63f29525bwh5v6do.mysql.rds.aliyuncs.com:3306
Source Database       : anjia

Target Server Type    : MYSQL
Target Server Version : 50718
File Encoding         : 65001

Date: 2017-10-19 20:29:38
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
  `publishTime` datetime DEFAULT NULL COMMENT '发布时间',
  `houseTypeId` int(11) DEFAULT NULL COMMENT '房屋类型',
  `ownerId` int(11) DEFAULT NULL,
  `area` float DEFAULT NULL COMMENT '房屋面积',
  `areaName` varchar(255) DEFAULT NULL COMMENT '房屋状态',
  `address` varchar(255) DEFAULT NULL,
  `floor` int(11) DEFAULT NULL,
  PRIMARY KEY (`houseId`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of houses
-- ----------------------------
INSERT INTO `houses` VALUES ('1', '实地看房，钥匙在店，空气清新，上门实拍', '3300', '2017-09-11 03:56:05', '1', '2', '90', '姑苏 云鼎鑫城', '园区干将路22号', '2');
INSERT INTO `houses` VALUES ('2', '空气清新，实地看房，小户型', '2500', '2017-09-13 17:53:00', '1', '2', '67', '姑苏 新野小区', '新业路干将路交界处', '34');
INSERT INTO `houses` VALUES ('3', '人气房源，适合自住，要是在安家，采光棒', '3000', '2017-09-13 05:03:00', '2', '2', '87', '姑苏 东塔福居', '东塔路西22号', '5');
INSERT INTO `houses` VALUES ('4', '交通方便，高清实拍，高区景观房', '2000', '2017-09-13 14:34:33', '2', '2', '67', '姑苏 南门小区', '南门二环33号', '2');
INSERT INTO `houses` VALUES ('5', '大东海山海大宅北欧风情海景三房两厅套房', '7001', '2017-10-10 11:33:22', '3', '2', '70', '工业园区 新华小筑', '工业园区 创苑路1号', '6');
INSERT INTO `houses` VALUES ('6', '洞天福地，景秀家园，您的绝佳选择', '3000', '2017-10-11 11:03:44', '1', '2', '67', '吴江 安踏小区', '安踏路33号', '5');
INSERT INTO `houses` VALUES ('7', '书香华苑，地中海风情装修', '3000', '2017-10-11 06:03:55', '3', '2', '80', '吴中 百叶小区', '吴中区创苑路333号', '5');
INSERT INTO `houses` VALUES ('8', '比邻大学城，书香气息漫步', '6000', '2017-10-11 07:05:32', '4', '2', '90', '工业园区 海德公园', '文荟人才公寓北', '7');
INSERT INTO `houses` VALUES ('9', '江南小镇风情装修，夫妻自住房', '4000', '2017-10-11 02:05:00', '3', '2', '90', '姑苏 雨露华庭', '姑苏区干将路33号', '7');
INSERT INTO `houses` VALUES ('10', '高端豪华型别墅，可短租', '10000', '2017-10-11 07:05:00', '4', '2', '200', '姑苏 华庭居', '姑苏区皇后大道东', '1');
INSERT INTO `houses` VALUES ('11', '凤起路西湖边温馨日式首次整租', '5000', '2017-10-11 00:00:00', '3', '2', '90', '工业园区 海德公园', '文汇公寓北', '6');
INSERT INTO `houses` VALUES ('13', '后现代工业冷淡风装修', '3000', '2017-10-19 22:00:22', '2', '2', '60', '工业园区 海德公园', '文汇公寓北', '4');
