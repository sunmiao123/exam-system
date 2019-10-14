import React, { Component } from 'react';
import { Button, Input, Form, message } from 'antd';
import { addAuthority } from '@/api/exam';

@Form.create({ name: 'add_api_type' })
class AddApiType extends Component {
	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				addAuthority(values).then(res => {
					message.success(res.data.msg);
					this.handleReset();
				});
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
					<Button>添加api接口权限</Button>
				</Form.Item>
				<Form.Item>
					{getFieldDecorator('api_authority_text', {
						rules: [
							{
								required: true,
								message: '请输入api接口权限名称!'
							}
						]
					})(<Input placeholder='请输入api接口权限名称' />)}
				</Form.Item>
				<Form.Item>
					{getFieldDecorator('api_authority_url', {
						rules: [
							{
								required: true,
								message: '请输入api接口权限url!'
							}
						]
					})(<Input placeholder='请输入api接口权限url' />)}
				</Form.Item>
				<Form.Item>
					{getFieldDecorator('api_authority_methods', {
						rules: [
							{
								required: true,
								message: '请输入api接口权限方法!'
							}
						]
					})(<Input placeholder='请输入api接口权限方法' />)}
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

export default AddApiType;
