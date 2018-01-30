import React from 'react';
import TipBox from './tipBox';
class Time extends React.Component {
	constructor(props){
		super(props)
	}
	render() {
		//find another time input
		return (
			<div> 
				<TipBox tips="cocktail parties start around 5 and last 2 hours and dinner parties start at around 7" />

				<h3>{this.props.title}</h3>
				<input name="time" type="time" onChange={this.props.handleChange} />
			</div>);
	}
}

export default Time