import React, { Component } from 'react';
import { Button, Select, Form } from 'antd';

const { Option } = Select;

@Form.create({ name: 'set_api_type' })
class SetApiType extends Component {
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
		let { userTypeList } = this.props;
		return (
			<Form onSubmit={this.handleSubmit} className='login-form'>
				<Form.Item>
					<Button>给身份设置api接口权限</Button>
				</Form.Item>
				<Form.Item>
					{getFieldDecorator('user_type', {
						rules: [
							{
								required: true,
								message: '请选择身份权限!'
							}
						]
					})(
						<Select
							placeholder='请选择身份id'
							style={{ width: 120 }}>
							{userTypeList &&
								userTypeList.map(item => {
									return (
										<Option key={item.id} value={item.id}>
											{item.type_text}
										</Option>
									);
								})}
						</Select>
					)}
				</Form.Item>
				<Form.Item>
					{getFieldDecorator('api_type', {
						rules: [
							{
								required: true,
								message: '请输入身份名称!'
							}
						]
					})(
						<Select style={{ width: 120 }}>
							<Option value='请选择api接口权限'>
								请选择api接口权限
							</Option>
							<Option value='lucy'>Lucy</Option>
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

export default SetApiType;
