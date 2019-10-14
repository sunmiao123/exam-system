'use strict';

const md5 = require('md5');

// 加密生成token
module.exports.SaveToken = uid => {
  const token = JSON.stringify({
    name: 'wyh',
    date: new Date().getTime(),
    uid,
  });
  return md5(token);
};

module.exports.SaveToId = uid => {
  const token = JSON.stringify({
    name: 'wyh-id',
    date: new Date().getTime(),
    uid,
  });
  return md5(token);
};
