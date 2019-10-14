'use strict';

const { RouterWhiteList } = require('../config');
const fs = require('fs');
const path = require('path');

module.exports = () => {
  return async function auth(ctx, next) {
    const flag = RouterWhiteList.filter(route => {
      return ctx.request.url === route;
    });
    const fileName = path.join(process.cwd(), '/app/public/index.html');
    const filePath = fs.readFileSync(fileName, 'utf8');
    if (flag.length) {
      await next();
      ctx.body = filePath;
    } else {
      await next();
    }
  };
};
