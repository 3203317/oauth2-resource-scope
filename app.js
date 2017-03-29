/*!
 * oauth2-resource-scope
 * Copyright(c) 2017 huangxin <3203317@qq.com>
 * ISC Licensed
 */
'use strict';

const http = require('http');
const OpenA = require('opena');

const biz = require('oauth2.biz');

var app = OpenA();

app.use(OpenA.api.logger());
app.use(OpenA.api.method(app.apis));
app.use(OpenA.api.params(app.apis));

app.use(OpenA.api.session(biz.user_app.getSession));

app.use(OpenA.api.sign(app.apis, (appkey, cb) => {
  biz.user_app.getUserAuth(appkey, (err, doc) => {
    if(err) return cb(err);
    if(!doc) return cb();
    cb(null, doc.seckey);
  });
}));

app.use(OpenA.api.exec(app.apis));
app.use(OpenA.api.error());

var port = process.env.PORT || 3005;
var server = http.createServer(app);

server.listen(port, () => {
  console.info('[INFO ] resource server listening on port %s.', port);
});