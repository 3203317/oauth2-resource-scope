/*!
 * oauth2-resource-scope
 * Copyright(c) 2017 huangxin <3203317@qq.com>
 * ISC Licensed
 */
'use strict';

const URL = require('url');

const biz = require('oauth2.biz');

module.exports = function(app, opts){
  return new Method(app, opts);
}

var Method = function(app, opts){
  var self = this;
  opts = opts || {};
  self.is_free = true;
  self.interval_time = opts.interval_time || 10;
  self.def_num = opts.def_num || 20;
};

var pro = Method.prototype;

pro.params = function(req, res, next){
  let query = URL.parse(req.url, true).query;
  next();
};

pro.exec = function(req, res, next){
  // var result = {
  //   data: {
  //     id: '123456',
  //     user_name: 'hx',
  //     avatar: ''
  //   }
  // };
  // res.send(result);

  biz.user.getById(req._user_id, (err, doc) => {
    if(err) return next(err);
    var result = { data: doc };
    res.send(result);
  });
};