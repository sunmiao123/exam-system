import React, { Component } from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';

class RouterMap extends Component {
	render() {
		const { routes, history } = this.props;

		return (
			<Router history={history}>
				<Switch>
					{routes.map(item => {
						return item.path ? (
							item.children ? (
								<Route
									key={item.name}
									path={item.path}
									component={props => (
										<item.component
											routes={item.children}
											{...props}>
											<RouterMap
												routes={item.children}
												history={history}
											/>
										</item.component>
									)}
								/>
							) : (
								<Route
									key={item.name}
									path={item.path}
									component={props => (
										<item.component {...props} />
									)}
								/>
							)
						) : (
							<Redirect key={item.from} {...item} />
						);
					})}
				</Switch>
			</Router>
		);
	}
}

export default RouterMap;
