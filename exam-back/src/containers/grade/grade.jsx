import React, { Component } from 'react';
import {
	Layout,
	Button,
	Table,
	Modal,
	Divider,
	Form,
	Select,
	Input,
	message
} from 'antd';
import {
	getGradeList,
	getSubjectList,
	getRoomList,
	addGrade,
	removeGrade,
	updateGrade
} from '@/api/grade';

const { Column } = Table;
const { Option } = Select;
const { Content } = Layout;
const { confirm } = Modal;

@Form.create({ name: 'Grade' })
class Grade extends Component {
	state = {
		subject: [],
		room: [],
		data: [],
		dataList: [],
		dataItem: {},
		visible: false,
		updateVisible: false
	};

	//删除班级
	handleDeltet(record) {
		const that = this;
		return confirm({
			title: '提示',
			content: '确定要删除此班级吗',
			onOk() {
				removeGrade({
					uid: record.grade_id
				});
				message.success('删除班级成功');
				that.props.history.replace('/main/grade');
			},
			onCancel() {
				message.error('删除取消');
			}
		});
	}

	//添加班级
	handleOk = e => {
		this.props.form.validateFields((err, values) => {
			if (!err) {
				addGrade({ ...values });
				this.props.history.replace('/main/grade');
				message.success('添加班级成功');
				this.handleReset();
				this.setState({
					visible: false
				});
			}
		});
	};

	//修改教室
	handleUpde(record) {
		this.setState(
			{
				dataItem: record
			},
			() => {
				this.showUpdateModal();
			}
		);
	}
	//修改
	handleClickOk = e => {
		let { grade_id } = this.state.dataItem;

		this.props.form.validateFields((err, values) => {
			if (!err) {
				this.setState({
					updateVisible: false
				});
				updateGrade({ grade_id, ...values });
				this.handleReset();
				this.props.history.replace('/main/grade');
			}
		});
	};

	handleReset = () => {
		this.props.form.resetFields();
	};

	componentDidMount() {
		getGradeList().then(res => {
			this.setState({
				data: res.data.result
			});
		});

		getSubjectList().then(res => {
			this.setState({
				subject: res.data.result
			});
		});

		getRoomList().then(res => {
			this.setState({
				room: res.data.result
			});
		});
	}

	showModal = () => {
		this.setState({
			visible: true
		});
	};

	handleCancel = e => {
		this.setState({
			visible: false
		});
		this.handleReset();
	};

	showUpdateModal = () => {
		this.setState({
			updateVisible: true
		});
	};

	handleUpdateCancel = e => {
		this.setState(
			{
				updateVisible: false
			},
			() => {
				this.handleReset();
			}
		);
	};

	render() {
		const { getFieldDecorator } = this.props.form;
		const { subject, room, data, dataItem } = this.state;

		return (
			<Layout>
				<h1 className='title-h1'>班级管理</h1>
				<Content className='room-content'>
					<div className='room-title'>
						<Button
							type='primary'
							icon='download'
							onClick={this.showModal}>
							添加班级
						</Button>
						<Modal
							title='添加班级'
							visible={this.state.visible}
							onOk={this.handleOk}
							onCancel={this.handleCancel}>
							<Form
								labelCol={{ span: 5 }}
								wrapperCol={{ span: 12 }}>
								<Form.Item label='班级名'>
									{getFieldDecorator('grade_name', {
										rules: [
											{
												required: true,
												message: '请输入班级名称'
											}
										]
									})(<Input />)}
								</Form.Item>
								<Form.Item label='教室名'>
									{getFieldDecorator('room_id', {
										rules: [
											{
												required: true,
												message: '请选择教室'
											}
										]
									})(
										<Select placeholder='请选择教室号'>
											{room &&
												room.map(item => {
													return (
														<Option
															key={item.room_id}
															value={
																item.room_id
															}>
															{item.room_name}
														</Option>
													);
												})}
										</Select>
									)}
								</Form.Item>
								<Form.Item label='课程名'>
									{getFieldDecorator('subject_id', {
										rules: [
											{
												required: true,
												message: '请选择课程名称'
											}
										]
									})(
										<Select placeholder='课程名'>
											{subject &&
												subject.map(item => {
													return (
														<Option
															key={
																item.subject_id
															}
															value={
																item.subject_id
															}>
															{item.subject_text}
														</Option>
													);
												})}
										</Select>
									)}
								</Form.Item>
							</Form>
						</Modal>
					</div>

					<Table dataSource={data} rowKey={row => row.grade_id}>
						<Column
							title='班级名'
							dataIndex='grade_name'
							key='grade_name'
						/>
						<Column
							title='课程名'
							dataIndex='subject_text'
							key='subject_text'
						/>
						<Column
							title='教室号'
							dataIndex='room_name'
							key='room_name'
						/>
						<Column
							title='操作'
							key='action'
							render={(text, record) => (
								<div>
									<span
										onClick={() => this.handleUpde(record)}>
										修改
									</span>
									<Divider type='vertical' />
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
					<Modal
						title='修改班级'
						visible={this.state.updateVisible}
						onOk={this.handleClickOk}
						onCancel={this.handleUpdateCancel}>
						<Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }}>
							<Form.Item label='班级名'>
								{getFieldDecorator('grade_name', {
									initialValue:
										dataItem && dataItem.grade_name,
									rules: [
										{
											required: true,
											message: '班级名'
										}
									]
								})(<Input disabled={true} />)}
							</Form.Item>
							<Form.Item label='教室名'>
								{getFieldDecorator('room_id', {
									rules: [
										{
											required: true,
											message: '请选择教室号'
										}
									]
								})(
									<Select placeholder='请选择教室号'>
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
							<Form.Item label='课程名'>
								{getFieldDecorator('subject_id', {
									rules: [
										{
											required: true,
											message: '请输入课程名'
										}
									]
								})(
									<Select placeholder='课程名'>
										{subject &&
											subject.map(item => {
												return (
													<Option
														key={item.subject_id}
														value={item.subject_id}>
														{item.subject_text}
													</Option>
												);
											})}
									</Select>
								)}
							</Form.Item>
						</Form>
					</Modal>
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

export default Grade;
