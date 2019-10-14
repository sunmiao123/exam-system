import React, { Component } from 'react';
import { Button, Select, Form } from 'antd';

const { Option } = Select;

@Form.create({ name: 'add_views' })
class AddView extends Component {
	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log(values);
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
					<Button>添加视图接口权限</Button>
				</Form.Item>
				<Form.Item>
					{getFieldDecorator('user_type', {
						rules: [
							{
								required: true,
								message: '请输入身份名称!'
							}
						]
					})(
						<Select style={{ width: 120 }}>
							<Option value='登录'>登录</Option>
							<Option value='主页面'>主页面</Option>
						</Select>
					)}
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

export default AddView;
