import React from 'react';

class Time extends React.Component {
	render() {
		return <div> <input name="time" type="time" onChange={this.props.handleChange} /></div>;
	}
}

export default Time