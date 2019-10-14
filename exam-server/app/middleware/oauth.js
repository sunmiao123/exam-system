'use strict';

module.exports = () => {
  return async function auth(ctx, next) {
    // console.log(ctx.request.header);
    const { authorization, uid } = ctx.request.header;
    if (!authorization) {
      ctx.status = 401;
      ctx.body = {
        code: 0,
        data: '没有权限，没有传token',
      };
    } else if (!uid) {
      ctx.status = 401;
      ctx.body = {
        code: 0,
        data: '没有权限，没有传uid',
      };
    } else {
      const result = await ctx.service.auth.auth(uid);
      // console.log(authorization);
      // console.log(result.token, '111111111111111111111');
      if (authorization === result.token) {
        await next();
      } else {
        ctx.body = {
          code: 0,
          data: '用户登陆已过期',
        };
      }
    }
  };
};
