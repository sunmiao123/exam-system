import axios from 'axios';

//添加试题
export function add_Questions({
	editorContent,
	Answer,
	title,
	course_type,
	exam_type,
	topic_type
}) {
	return axios
		.get('/exam_manage/add_questions/add', {
			params: {
				title,
				subject_text: editorContent,
				questions_type_text: topic_type,
				questions_answer: Answer,
				exam_type: exam_type
			}
		})
		.then(res => {
			if (res.data.code === 1) {
				alert('添加成功');
			}
		});
}

export function subject() {
	return axios.get('/exam_manage/exam_subject');
}

export function examType() {
	return axios.get('/exam_manage/exam_type');
}

export function topicType() {
	return axios.get('/exam_manage/Topic_types');
}

//获取视图权限
export function getViewAuthority(params) {
	const url = '/getViewAuthorys';
	return axios.post(url, {
		type_type: params
	});
}
