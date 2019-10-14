import React, { Component } from 'react';
import { Button, Input, Select, Form ,message} from 'antd';
import { addUser, updateUser } from '@/api/user';

const ButtonGroup = Button.Group;

const { Option } = Select;


@Form.create({ name: 'add_user' })
class UserInfo extends Component {
	state = {
		hidden: true
    };
    
    
handleSubmit = e => {
    e.preventDefault();
    const { hidden } = this.state;
    this.props.form.validateFields((err, values) => {
        if (!err) {
            if (hidden) {
                addUser({ ...values }).then(res => {
                    message.success(res.data.msg);
                    this.handleReset();
                });
            } else {
                updateUser({ ...values }).then(res => {
                    message.success(res.data.msg);
                    this.handleReset();
                });
            }
        }
    });
};

handleReset = () => {
    this.props.form.resetFields();
};

	render() {
        let { userInfoList, userTypeList } = this.props;
        const { getFieldDecorator } = this.props.form;
        return (
            <div  className='addUesr_box'>
            {this.state.hidden ? (
                <div>
                    <div className='p'>
                        <ButtonGroup>
                            <Button
                                onClick={() => {
                                    this.setState({
                                        hidden: true
                                    });
                                    this.handleReset();
                                }}>
                                添加用户
                            </Button>
                            <Button
                                onClick={() => {
                                    this.setState({
                                        hidden: false
                                    });
                                    this.handleReset();
                                }}>
                                更新用户
                            </Button>
                        </ButtonGroup>
                    </div>
                    <div className='p'>
                        <Form
                            onSubmit={this.handleSubmit}
                            className='login-form'>
                            <Form.Item>
                                {getFieldDecorator('user_name', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请输入用户名!'
                                        }
                                    ]
                                })(<Input placeholder='Username' />)}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('user_pwd', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请输入密码!'
                                        }
                                    ]
                                })(<Input placeholder='Password' />)}
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
                                                    <Option
                                                        key={item.id}
                                                        value={item.id}>
                                                        {item.type_text}
                                                    </Option>
                                                );
                                            })}
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
                    </div>
                </div>
            ) : (
                <div  className='addUesr_box'>
                    <div className='p'>
                        <ButtonGroup>
                            <Button
                                onClick={() => {
                                    this.setState({
                                        hidden: true
                                    });
                                    this.handleReset();
                                }}>
                                添加用户
                            </Button>
                            <Button
                                onClick={() => {
                                    this.setState({
                                        hidden: false
                                    });
                                    this.handleReset();
                                }}>
                                更新用户
                            </Button>
                        </ButtonGroup>

                        <Form
                            onSubmit={this.handleSubmit}
                            className='login-form'>
                            <Form.Item>
                                {getFieldDecorator('user_id', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请选择用户!'
                                        }
                                    ]
                                })(
                                    <Select
                                        placeholder='请选择用户'
                                        style={{ width: 120 }}>
                                        {userInfoList &&
                                            userInfoList.map(item => {
                                                return (
                                                    <Option
                                                        key={
                                                            item.user_id
                                                        }
                                                        value={
                                                            item.user_id
                                                        }>
                                                        {item.user_name}
                                                    </Option>
                                                );
                                            })}
                                    </Select>
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('user_name', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请输入用户名!'
                                        }
                                    ]
                                })(<Input placeholder='Username' />)}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('user_pwd', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请输入密码!'
                                        }
                                    ]
                                })(<Input placeholder='Password' />)}
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
                                                    <Option
                                                        key={item.id}
                                                        value={item.id}>
                                                        {item.type_text}
                                                    </Option>
                                                );
                                            })}
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
                    </div>
                </div>
            )}
            </div>
         
		);
	}
}

export default UserInfo;
