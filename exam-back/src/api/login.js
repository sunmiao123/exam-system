/*
 * @Author: 王银虎
 * @Date: 2019-09-08 20:13:16
 * @Last Modified by: liuxu
 * @Last Modified time: 2019-09-11 15:39:29
 */

import axios from 'axios';
/**
 * @name 登录
 * @param {密码} password
 * @param {账号} username
 */
export function login(username, password) {
	const pageUrl = '/user/login';
	return axios.post(pageUrl, { user_pwd: password, user_name: username });
}
