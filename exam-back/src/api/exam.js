import axios from 'axios';

//获取考试类型
export function getExamTypeList() {
	const url = '/exam/examTypeList';
	return axios.get(url);
}

//添加考试类型
export function addExamItem(params) {
	const url = '/exam/addExamList';
	return axios.post(url, params);
}

//添加API接口权限
export function addAuthority(params) {
	const url = '/authority/add';
	return axios.post(url, params);
}

// 添加考试列表
export function addExamination(params) {
	const url = '/exam/addExam';
	return axios.post(url, params);
}
