import React from 'react';

class Date extends React.Component {
	render() {
		return <div> <input name="date" type="date"  onChange={this.props.handleChange} /></div>;
	}
}

export default Date