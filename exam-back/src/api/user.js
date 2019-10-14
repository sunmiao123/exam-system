import axios from 'axios';

//获取用户名称
export function getUserInfo() {
	const url = '/user/getUserInfo';
	return axios.get(url);
}

//获取用户权限类型列表
export function userType() {
	const url = '/user/userType';
	return axios.get(url);
}

//获取用户数据
export function userList() {
	const url = '/user/userList';
	return axios.get(url);
}

//添加用户
export function addUser(params) {
	const url = '/user/addUser';
	return axios.post(url, params);
}

//添加用户权限
export function addUserType(params) {
	const url = '/user/addUserType';
	return axios.post(url, params);
}

//更新用户
export function updateUser(params) {
	const url = '/user/updateUser';
	return axios.post(url, params);
}
