'use strict';
const { Controller } = require('egg');
const { SaveToken } = require('../token');
const md5 = require('md5');
const path = require('path');
const fs = require('fs');
const awaitWriteStream = require('await-stream-ready').write;
const sendToWormhole = require('stream-wormhole');

class UserController extends Controller {
  async userUpdate() {
    const { ctx } = this;
    const stream = await ctx.getFileStream();
    const filename = md5(stream.filename) + '.jpg';
    const target = path.join(
      process.cwd(),
      `app/public/userUpload/${filename}`
    );
    const writeStream = fs.createWriteStream(target);

    try {
      // 异步把文件流 写入
      await awaitWriteStream(stream.pipe(writeStream));
    } catch (err) {
      // 如果出现错误，关闭管道
      await sendToWormhole(stream);
      throw err;
    }

    ctx.body = {
      code: 200,
      msg: '上传成功',
      url: '/public/userUpload/' + filename,
    };
  }

  async login() {
    const { ctx } = this;
    const userLogin = await this.service.user.login();
    if (userLogin.token) {
      ctx.body = {
        code: 1,
        result: 'success',
        uid: userLogin.uid,
        token: userLogin.token,
        username: userLogin.user_name,
      };
    } else {
      ctx.body = {
        code: 0,
        error: 'failed',
      };
    }
  }

  // 获取用户
  async getUserInfo() {
    const { ctx } = this;
    const result = await ctx.service.user.getUserInfo();
    if (result.length) {
      ctx.body = {
        code: 1,
        result,
      };
    }
  }

  // 获取用户数据列表
  async userList() {
    const { ctx } = this;
    const result = await ctx.service.user.userList();
    if (result.length) {
      ctx.body = {
        code: 1,
        result,
      };
    }
  }

  // 获取用户权限列表
  async userType() {
    const { ctx } = this;
    const result = await ctx.service.user.userType();
    if (result.length) {
      ctx.body = {
        code: 1,
        result,
      };
    }
  }

  // 用户注册
  async registry() {
    const { ctx } = this;
    let { user_name, user_pwd } = ctx.request.body;
    const userResult = await ctx.service.user.loginService(user_name);
    if (userResult.length !== 0) {
      ctx.body = {
        code: 0,
        msg: '用户已存在',
      };
      return;
    }
    user_pwd = md5(JSON.stringify(user_pwd));
    const userRegistry = await ctx.service.user.registryService(
      user_name,
      user_pwd
    );
    if (userRegistry.affectedRows === 1) {
      ctx.body = {
        code: 200,
        msg: '用户注册成功',
      };
    }
  }

  // 添加用户
  async addUser() {
    const { ctx } = this;
    const { user_name, user_pwd, user_type } = ctx.request.body;
    await ctx.service.user.addUserService(user_name, user_pwd, user_type);
    ctx.body = {
      code: 1,
      msg: '添加用户成功',
    };
  }
  // 更新用户
  async updateUser() {
    const { ctx } = this;
    const { user_id, user_name, user_pwd, user_type } = ctx.request.body;
    await ctx.service.user.updateUser(
      user_id,
      user_name,
      user_pwd,
      user_type
    );
    ctx.body = {
      code: 1,
      msg: '更新用户成功',
    };
  }
  // 添加用户权限
  async addUserType() {
    const { ctx } = this;
    const { type_text } = ctx.request.body;
    await ctx.service.user.addUserType(type_text);
    ctx.body = {
      code: 1,
      msg: '添加成功',
    };
  }
  async getViewAuthority() {
    const { ctx } = this;
    const { type_type } = ctx.request.body;
    const result = await ctx.service.user.getViewAuthority(type_type);
    ctx.body = {
      code: 1,
      result,
    };
  }

  // 登录--------------------------------------------------------------------------------王银虎
  async user() {
    const { ctx } = this;
    const { user_pwd, user_name } = ctx.request.body;
    const Verification = await ctx.service.user.Verification(user_name);
    const Gpass = await ctx.service.user.Gpass(user_pwd);
    const cerser = await ctx.service.user.logins(user_name, user_pwd);
    if (Verification) {
      if (Gpass) {
        const token = SaveToken(cerser[0].user_id);
        const res = await ctx.service.user.SaveToen(
          cerser[0].user_id,
          token
        );
        if (res.affectedRows) {
          ctx.body = {
            code: 1,
            data: cerser,
            token,
          };
        }
      } else {
        ctx.body = {
          code: 0,
          data: '密码错误',
        };
      }
    } else {
      ctx.body = {
        code: 0,
        data: '账号错误',
      };
    }
  }
}

module.exports = UserController;
