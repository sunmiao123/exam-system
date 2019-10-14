import React, { Component } from 'react';
import '@/assets/css/index.css';
import '@/assets/css/room.css';
import '@/assets/css/questionsType.css';
import '@/assets/css/watchQuestions.css';

export class Layouts extends Component {
	render() {
		return <div className='wrap'>{this.props.children}</div>;
	}
}

export default Layouts;
