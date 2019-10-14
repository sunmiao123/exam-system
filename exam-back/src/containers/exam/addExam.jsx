import React, { Component } from 'react';

import {
	Select,
	DatePicker,
	InputNumber,
	Button,
	Input,
	message,
	Form
} from 'antd';
import { getExamTypeList, addExamination } from '@/api/exam';
import { getSubjectList } from '@/api/grade';
import '@/assets/css/addExam.css';
const { Option } = Select;

class AddExam extends Component {
	state = {
		exam_type: [],
		course_type: [],
		startValue: null,
		endValue: null,
		endOpen: false
	};
	render() {
		const { exam_type, course_type, endOpen } = this.state;
		const { getFieldDecorator } = this.props.form;

		return (
			<div className='add-exam-container'>
				<div className='exam-title'>
					<h2>添加考试</h2>
				</div>
				<div className='add-exam-content'>
					<Form onSubmit={this.handleSubmit}>
						<Form.Item label='试题标题'>
							{getFieldDecorator('exam_title', {
								rules: [
									{
										required: true,
										message: '请输入试题标题'
									}
								]
							})(
								<Input type='text' className='add-exam-input' />
							)}
						</Form.Item>
						<Form.Item label='选择考试类型：'>
							{getFieldDecorator('exam_id', {
								rules: [
									{
										required: true,
										message: '请选择考试类型'
									}
								]
							})(
								<Select
									style={{ width: 220, height: 35 }}
									onChange={this.changeExam}>
									{exam_type.length &&
										exam_type.map((item, index) => (
											<Option
												key={index}
												value={item.tid}>
												{item.type_name}
											</Option>
										))}
								</Select>
							)}
						</Form.Item>
						<Form.Item label='选择课程：'>
							{getFieldDecorator('subject_id', {
								rules: [
									{
										required: true,
										message: '请选择选择课程'
									}
								]
							})(
								<Select
									style={{ width: 220, height: 35 }}
									onChange={this.changeCourse}>
									{course_type.length &&
										course_type.map((item, index) => (
											<Option
												key={index}
												value={item.subject_id}>
												{item.subject_text}
											</Option>
										))}
								</Select>
							)}
						</Form.Item>
						<Form.Item label='设置题量：'>
							{getFieldDecorator('question_sum', {
								rules: [{ required: true, message: '设置题量' }]
							})(
								<InputNumber
									min={3}
									max={10}
									onChange={this.changeQuestionSum}
								/>
							)}
						</Form.Item>
						<Form.Item label='设置时间'>
							{getFieldDecorator('examination_startTime', {
								rules: [
									{
										required: true,
										message: '请选择开始时间'
									}
								]
							})(
								<DatePicker
									disabledDate={this.disabledStartDate}
									showTime
									format='YYYY-MM-DD HH:mm:ss'
									placeholder='Start'
									onChange={this.onStartChange}
									onOpenChange={this.handleStartOpenChange}
								/>
							)}
							{getFieldDecorator('examination_endTime', {
								rules: [
									{
										required: true,
										message: '请选择结束时间'
									}
								]
							})(
								<DatePicker
									disabledDate={this.disabledEndDate}
									showTime
									format='YYYY-MM-DD HH:mm:ss'
									placeholder='End'
									onChange={this.onEndChange}
									open={endOpen}
									onOpenChange={this.handleEndOpenChange}
								/>
							)}
						</Form.Item>
						<Form.Item>
							<Button type='primary' htmlType='submit'>
								创建试卷
							</Button>
						</Form.Item>
					</Form>
				</div>
			</div>
		);
	}

	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			values.examination_startTime = Date.parse(
				values.examination_startTime
			);
			values.user_name = sessionStorage.getItem('username');
			values.examination_endTime = Date.parse(values.examination_endTime);
			if (!err) {
				addExamination(values).then(res => {
					if (res.data.code === 200) {
						message.info(res.data.msg);
						this.props.history.push(
							`/main/examDetail/${JSON.stringify(values)}`
						);
					} else {
						message.error(res.data.msg);
					}
				});
			}
		});
	};

	disabledStartDate = startValue => {
		const { endValue } = this.state;
		if (!startValue || !endValue) {
			return false;
		}
		return startValue.valueOf() > endValue.valueOf();
	};

	disabledEndDate = endValue => {
		const { startValue } = this.state;
		if (!endValue || !startValue) {
			return false;
		}
		return endValue.valueOf() <= startValue.valueOf();
	};

	onChange = (field, value) => {
		this.setState({
			[field]: value
		});
	};

	onStartChange = value => {
		this.onChange('startValue', value);
	};

	onEndChange = value => {
		this.onChange('endValue', value);
	};

	handleStartOpenChange = open => {
		if (!open) {
			this.setState({ endOpen: true });
		}
	};

	handleEndOpenChange = open => {
		this.setState({ endOpen: open });
	};
}
Object.assign(AddExam.prototype, {
	componentDidMount() {
		getExamTypeList().then(res => {
			this.setState({
				exam_type: res.data.result
			});
		});
		getSubjectList().then(res => {
			this.setState({
				course_type: res.data.result
			});
		});
	}
});
const addExam = Form.create({ name: 'customized_form_controls' })(AddExam);
export default addExam;
