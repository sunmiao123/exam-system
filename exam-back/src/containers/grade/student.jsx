/*
 * @Author: liuxu
 * @Date: 2019-09-03 20:13:58
 * @Last Modified by: liuxu
 * @Last Modified time: 2019-09-08 21:20:06
 */

import React, { Component } from 'react';
import {
	Layout,
	Form,
	Button,
	Input,
	Icon,
	Select,
	Table,
	Modal,
	message
} from 'antd';
import {
	getRoomList,
	getStudentList,
	getGradeList,
	removeStudent,
	searchStudent
} from '@/api/grade';

const { Content } = Layout;
const { Option } = Select;
const { confirm } = Modal;
const { Column } = Table;

@Form.create({ name: 'normal_login' })
class Student extends Component {
	state = {
		grade: [],
		room: [],
		student: [],
		studentList: []
	};

	componentDidMount() {
		//获取教室列表
		getRoomList().then(res => {
			this.setState({
				room: res.data.result
			});
		});
		//获取学生列表
		this.getStudent();
		//获取班级列表
		getGradeList().then(res => {
			this.setState({
				grade: res.data.result
			});
		});
	}

	getStudent() {
		getStudentList().then(res => {
			this.setState({
				studentList: res.data.result
			});
		});
	}

	showConfirm = uid => {
		const { history } = this.props;
		confirm({
			title: '删除信息',
			content: '确定要删除该学生信息吗',
			okText: '删除',
			cancelText: '取消',
			onOk() {
				removeStudent({
					uid
				});
				message.success('删除成功');
				history.replace('/main/student');
			},
			onCancel() {
				message.error('删除失败');
			}
		});
	};

	//删除学生
	handleDeltet(record) {
		const { student_id } = record;
		this.showConfirm(student_id);
	}

	//搜索
	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				if (values.grade_id === undefined) {
					this.getStudent();
				} else {
					searchStudent({ ...values }).then(res => {
						message.info(res.data.msg);
						this.setState({
							studentList: res.data.result
						});
					});
					this.handleReset();
				}
			}
		});
	};

	handleReset = () => {
		this.props.form.resetFields();
	};

	render() {
		const { getFieldDecorator } = this.props.form;
		const { grade, room, studentList } = this.state;
		return (
			<Layout>
				<h1 className='title-h1'>学生管理</h1>
				<Content className='room-content'>
					<Form layout='inline' onSubmit={this.handleSubmit}>
						<Form.Item>
							{getFieldDecorator('student_name')(
								<Input
									prefix={
										<Icon
											type='user'
											style={{ color: 'rgba(0,0,0,.25)' }}
										/>
									}
									placeholder='输入学生姓名'
								/>
							)}
						</Form.Item>
						<Form.Item>
							{getFieldDecorator('room_id')(
								<Select
									style={{ minWidth: 150 }}
									placeholder='选择教室号'>
									{room &&
										room.map(item => {
											return (
												<Option
													key={item.room_id}
													value={item.room_id}>
													{item.room_name}
												</Option>
											);
										})}
								</Select>
							)}
						</Form.Item>
						<Form.Item>
							{getFieldDecorator('grade_id')(
								<Select
									style={{ minWidth: 150 }}
									placeholder='班级名'>
									{grade &&
										grade.map(item => {
											return (
												<Option
													key={item.grade_id}
													value={item.grade_id}>
													{item.grade_name}
												</Option>
											);
										})}
								</Select>
							)}
						</Form.Item>
						<Form.Item>
							<Button
								style={{ width: 120 }}
								type='primary'
								htmlType='submit'
								className='login-form-button'>
								搜索
							</Button>
						</Form.Item>
						<Form.Item>
							<Button
								type='primary'
								className='login-form-button'
								onClick={this.handleReset}>
								重置
							</Button>
						</Form.Item>
					</Form>

					<Table
						dataSource={studentList}
						rowKey={row => row.student_id}>
						<Column
							title='姓名'
							dataIndex='student_name'
							key='student_name'
						/>
						<Column
							title='学号'
							dataIndex='student_id'
							key='student_id'
						/>
						<Column
							title='班级'
							dataIndex='grade_name'
							key='grade_name'
						/>
						<Column
							title='教室'
							dataIndex='room_name'
							key='room_name'
						/>

						<Column
							title='密码'
							dataIndex='student_pwd'
							key='student_pwd'
						/>
						<Column
							title='操作'
							key='action'
							render={(text, record) => (
								<div>
									<span
										onClick={() =>
											this.handleDeltet(record)
										}>
										删除
									</span>
								</div>
							)}
						/>
					</Table>
				</Content>
			</Layout>
		);
	}

	componentWillUnmount() {
		this.setState = (state, callback) => {
			return;
		};
	}
}

export default Student;
