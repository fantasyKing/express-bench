/**
 * Created by wangxr on 16/12/15.
 */
var express = require('express');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var app = express();

var _User = Schema({
  app_id: { type: String, index : true }, // app info
  phone: { type: String, index: true },
  country_code: String,
  avatar:String,
  fullname: String,
  username: String,
  lock_username: { type: Number, default: -1 },
  password: String,
  birthday: Date,
  /* 1- 男 0-女 */
  gender: { type: Number, default: -1 },
  introduce: String,
  industry: String,
  // sns
  email: { type: String, index: true },
  github: String,
  linkedin: String,
  twitter: String,
  facebook: String,
  weixin: String,
  weibo: String,
  search_text:String,

  // 0 普通人, 1 创业者, 2 投资人, -999 机器人
  type: { type: Number, default: 0 },
  // 创建经费群配额
  fund_raising_channel_own_quota: Number,

  // redundant field
  company: String,
  title: String,
  city: String,
  // cms
  /* 1 有权限*/
  is_admin: { type: Number, default: 0 },

  // 私聊设置 0 无条件, 1 需要发送名片
  direct_chat_status: { type: Number, default: 0 },
  _status: { type: Number, default: 1 }, // -1 受限用户
  // 是否运营人员, 可连接客服机器人
  is_operator: Number,
  // 是否开启点赞变收藏  1. 开启; -1 关闭
  like_to_collect : { type: Number, default: 1 }
}, { collection: 'user' });

mongoose.Promise = global.Promise;

db.on('error',console.error.bind(console,'连接错误:'));
db.once('open',function(){
  //一次打开记录
});

var model = db.model('User', _User);

app.get('/', function (req, res) {
  model.findById({_id: '55c8c86f9cd1320314a03047'}, function(err, doc){
    console.log(doc);
    res.send(doc);
  });
});

module.exports = app;
