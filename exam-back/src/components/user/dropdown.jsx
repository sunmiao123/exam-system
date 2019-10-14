/*
 * @Author: liuxu
 * @Date: 2019-09-12 09:52:36
 * @Last Modified by: liuxu
 * @Last Modified time: 2019-09-12 11:26:39
 */

import React, { Component } from 'react';
import { Menu, Dropdown, message } from 'antd';

class DropdownAvaus extends Component {
	menu() {
		return (
			<Menu>
				<Menu.Item
					style={{ textAlign: 'center' }}
					onClick={() => this.handleClick()}>
					<span>退出账户</span>
				</Menu.Item>
			</Menu>
		);
	}

	handleClick() {
		message.info('用户已注销', 1);
		sessionStorage.clear();
		this.props.history.replace('/login');
	}
	render() {
		const { username, userType } = this.props;
		return (
			<Dropdown overlay={() => this.menu()} placement='bottomCenter'>
				{/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
				<a className='ant-dropdown-link' href='#'>
					{username}
					&emsp;
					{userType}
				</a>
			</Dropdown>
		);
	}
}

export default DropdownAvaus;
