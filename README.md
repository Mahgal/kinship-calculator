# 亲戚称呼计算器 (Kinship Term Calculator)

## 简介
亲戚称呼计算器是一个微信小程序，旨在帮助用户通过建立关系链快速查询对应亲戚的正确称呼。小程序包含“计算器”和“常见称呼速查”两个核心功能。

## 项目结构
- `app.json`, `app.js`, `app.wxss` - 小程序全局配置
- `pages/index/` - 计算器：关系链生成页面
- `pages/list/` - 速查表：常见亲戚称呼浏览与查询
- `utils/kinship.js` - 核心亲属关系引擎，纯 JS 实现
- `utils/ads.js` - 流量主广告占位配置
- `tests/test-kinship.js` - `utils/kinship.js` 引擎的测试断言

**Note:** Replace `images/tip-qr.png` with the owner's real WeChat 赞赏码 image before release.

## 如何导入微信开发者工具
1. 打开 微信开发者工具。
2. 点击 "导入项目"。
3. 选择该项目的根目录。
4. 在 AppID 处填入你的小程序 AppID 或选择 "测试号"。
5. 点击 "导入"，即可进行本地预览与开发。

## 声明
本项目中所有的亲戚称呼数据均基于常识编写与整理，代码和内容皆为原创实现，未复制任何已有应用的数据库、文本或代码。