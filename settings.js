/*!
 * oauth2-resource-scope
 * Copyright(c) 2017 huangxin <3203317@qq.com>
 * ISC Licensed
 */
'use strict';

module.exports = {
  oauth2: {
    mysql: {
      database: 'oauth2',
      host: '127.0.0.1',
      port: 12306,
      user: 'root',
      password: '123456',
      connectionLimit: 50
    },
    redis: {
      port: 12379,
      host: '127.0.0.1',
      password: '123456'
    }
  },
  foreworld: {
    mysql: {
      database: 'foreworld',
      host: '127.0.0.1',
      port: 12306,
      user: 'root',
      password: '123456',
      connectionLimit: 50
    }
  }
};
