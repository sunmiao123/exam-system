/*
 * @Author: liuxu
 * @Date: 2019-09-03 11:05:47
 * @Last Modified by: ocz
 * @Last Modified time: 2019-09-09 20:21:14
 */

import React, { Component } from 'react';
import { Layout, Button, Table, Modal, Form, Input, message } from 'antd';

import { getRoomList, addRoom, removeRoom } from '@/api/grade';

const { Content } = Layout;
const { confirm } = Modal;
const { Column } = Table;

@Form.create({ name: 'room' })

class Room extends Component {
	state = {
		data: [],
		visible: false,
		inputText: ''
	};

	//删除教室
	handleDelete(record) {
		const { room_id } = record;
		const that = this;
		return confirm({
			title: '提示',
			content: '确定要删除此教室吗',
			onOk() {
				removeRoom({ room_id });
				message.success('删除成功');
				that.props.history.replace('/main/room');
			},
			onCancel() {
				message.error('删除取消');
			}
		});
	}

	//添加教室
	addSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				const { room } = values;
				addRoom({ classID: room });
				message.success('添加教室成功');
				this.props.history.replace('/main/room');
				this.setState({
					visible: false
				});
			}
		});
	};

	componentDidMount() {
		getRoomList().then(res => {
			this.setState({ data: res.data.result });
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
	};

	render() {
		const { getFieldDecorator } = this.props.form;
		let { data } = this.state;
		return (
			<Layout>
				<h1 className='title-h1'>教室管理</h1>
				<Content className='room-content'>
					<div className='room-title'>
						<Button
							type='primary'
							icon='download'
							onClick={this.showModal}>
							添加教室
						</Button>
						<Modal
							title='添加教室'
							visible={this.state.visible}
							onOk={this.addSubmit}
							onCancel={this.handleCancel}>
							<Form>
								<Form.Item label='班级名称'>
									{getFieldDecorator('room', {
										rules: [
											{
												required: true,
												message: '请输入班级名称'
											}
										]
									})(<Input />)}
								</Form.Item>
							</Form>
						</Modal>
					</div>
					<Table dataSource={data} rowKey={row => row.room_id}>
						<Column
							title='班级名'
							dataIndex='room_name'
							key='room_id'
						/>
						<Column
							title='操作'
							key='action'
							render={(text, record) => (
								<div>
									<span
										onClick={() =>
											this.handleDelete(record)
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

export default Room;
