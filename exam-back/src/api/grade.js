import axios from 'axios';

//获取教室列表
export function getGradeList() {
	const url = '/grade/gradeList';
	return axios.get(url);
}

//获取课程列表
export function getSubjectList() {
	const url = '/grade/getSubjectList';
	return axios.get(url);
}

//获取班级列表数据
export function getRoomList() {
	const url = '/grade/roomList';
	return axios.get(url);
}

//获取学生列表数据
export function getStudentList() {
	const url = '/grade/getStudentList';
	return axios.get(url);
}

//添加教室
export function addRoom(params) {
	const url = '/grade/addRoom';
	return axios.post(url, params);
}

//添加班级数据
export function addGrade(params) {
	const url = '/grade/addGrade';
	return axios.post(url, params);
}

//删除教室
export function removeRoom(params) {
	const url = '/grade/removeRoom';
	return axios.get(url, {
		params
	});
}

//删除学生数据
export function removeStudent(params) {
	const url = '/grade/removeStudent';
	return axios.get(url, {
		params
	});
}

//删除教室数据
export function removeGrade(params) {
	const url = '/grade/removeGrade';
	return axios.get(url, {
		params
	});
}

//修改班级数据s
export function updateGrade(params) {
	const url = '/grade/updateGrade';
	return axios.post(url, params);
}

//搜素学生数据
export function searchStudent(params) {
	const url = '/grade/searchStudent';
	return axios.post(url, params);
}
