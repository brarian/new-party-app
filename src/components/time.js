import React from 'react';

class Time extends React.Component {
	constructor(props){
		super(props)
	}
	render() {
		//find another time input
		return <div> <input name="time" type="time" onChange={this.props.handleChange} /></div>;
	}
}

export default Time