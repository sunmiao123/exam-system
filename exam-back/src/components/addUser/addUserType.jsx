import React, { Component } from 'react';
import { Button, Input, Form, message } from 'antd';
import { addUserType } from '@/api/user';

@Form.create({ name: 'add_user_type' })
class AddUserType extends Component {
	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				addUserType(values);
				message.success('添加用户权限成功');
				this.handleReset();
			}
		});
	};

	handleReset = () => {
		this.props.form.resetFields();
	};

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Form onSubmit={this.handleSubmit} className='login-form'>
				<Form.Item>
					<Button>添加身份</Button>
				</Form.Item>
				<Form.Item>
					{getFieldDecorator('type_text', {
						rules: [
							{
								required: true,
								message: '请输入身份名称!'
							}
						]
					})(<Input placeholder='请输入身份名称' />)}
				</Form.Item>
				<Form.Item>
					<Button
						type='primary'
						htmlType='submit'
						className='login-form-button'>
						确定
					</Button>
					<Button
						style={{ marginLeft: '15px' }}
						onClick={() => this.handleReset()}>
						重置
					</Button>
				</Form.Item>
			</Form>
		);
	}
}

export default AddUserType;
