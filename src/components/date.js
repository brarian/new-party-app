import React from 'react';
import TipBox from './tipBox';
class Date extends React.Component {
	constructor(props){
		super(props)
	}
	
	render() {
		return (
		<div> 
			<TipBox tips="give yourself at least 2 weeks to plan the party"/>

			<h3>{this.props.title}</h3>
			<input name="date" type="date" onChange={this.props.handleChange} />
		</div>

		);
	}
}

export default Date