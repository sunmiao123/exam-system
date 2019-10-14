'use strict';

const { Service } = require('egg');
const { encryptPassword, createToken, createUserID } = require('../config');

class UserService extends Service {
  // 登录
  async login() {
    const { user_name, user_pwd } = this.ctx.request.body;
    const sql = `select * from user where user_name='${user_name}' and user_pwd='${user_pwd}'`;
    const result = await this.app.mysql.query(sql);
    if (result.length) {
      const uid = result[0].user_id;
      const token = encryptPassword(uid);
      await this.app.mysql.query(
        `update user set token='${token}' where user_id = ${uid}`
      );
      return result[0];
    }
  }

  // 注册
  async registryService(user_name, user_pwd) {
    const $sql = `insert into user (user_name,user_pwd) values ("${user_name}" , "${user_pwd}")`;
    const result = await this.app.mysql.query($sql);
    return result;
  }

  // 添加用户
  async addUserService(user_name, user_pwd, user_type) {
    // const pwd = encryptPassword(user_pwd);
    const uid = createUserID();
    const token = createToken();
    const $sql = `insert into user (user_name,user_pwd,user_type,uid,token) values ("${user_name}" , "${user_pwd}","${user_type}",'${uid}',"${token}")`;
    await this.app.mysql.query($sql);
  }
  // 更新用户
  async updateUser(user_id, user_name, user_pwd, user_type) {
    const pwd = encryptPassword(user_pwd);
    const $sql = `Update user set user_name="${user_name}",user_pwd="${pwd}",user_type="${user_type}" where user_id="${user_id}"`;
    await this.app.mysql.query($sql);
  }

  // 获取用户名
  async getUserInfo() {
    const result = await this.app.mysql.select('user', {
      columns: [ 'user_id', 'user_name' ],
    });
    return result;
  }

  // 获取用户列表
  async userList() {
    const $sql =
			'select user_id,user_name,user_pwd,type_text from user,type where user.user_type = type.type_id';
    const result = await this.app.mysql.query($sql);
    return result;
  }

  // 获取用户权限列表
  async userType() {
    const result = await this.app.mysql.select('type', {
      columns: [ 'id', 'type_text' ],
    });
    return result;
  }

  // 添加用户权限
  async addUserType(type_text) {
    const type_id = encryptPassword(type_text);
    await this.app.mysql.insert('type', {
      type_id,
      type_text,
    });
  }

  // 获取用户视图权限列表
  async getViewAuthority(type_text) {
    const $sql = `select type.type_id,type.type_text,view_authority_text from view_authority,type where type.type_id = view_authority.type_id and type.type_text = '${type_text}'`;
    const result = await this.app.mysql.query($sql);
    return result[0];
  }

  // 王银虎--------------------------------------------------------------------------------------------------------------------------------
  // 验证数据库里是否有它 有就返回有的那个数据
  async logins(username, password) {
    const user = await this.app.mysql.query(
      `select user_id,user_name,type_id,type_text from user,type where user.user_name='${username}' and user.user_pwd='${password}' and user.user_type=type.type_id`
    );
    return user;
  }

  // 验证登录用户
  async Verification(username) {
    const user = await this.app.mysql.get('user', { user_name: username });
    return user;
  }

  // 验证登录用户
  async Gpass(password) {
    const user = await this.app.mysql.get('user', { user_pwd: password });
    return user;
  }

  // 数据库存token
  async SaveToen(uid, token) {
    const $sql = `update user set token='${token}' where user_id=${uid}`;
    const user = await this.app.mysql.query($sql);
    return user;
  }
}

module.exports = UserService;
