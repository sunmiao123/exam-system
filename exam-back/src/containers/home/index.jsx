import React, { Component } from 'react';
import { Layout, Row } from 'antd';

const { Content } = Layout;

class HomePage extends Component {
	render() {
		return (
			<Layout>
				<Content>
					<Row style={{ height: 100 }}></Row>
					<Row
						type='flex'
						justify='center'
						style={{
							fontSize: 20,
							fontWeight: 'bold',
							color: 'blue'
						}}>
						欢迎来到考试管理系统
					</Row>
				</Content>
			</Layout>
		);
	}
}

export default HomePage;
