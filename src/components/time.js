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
				<div class="row party-box">
          		<div class="small-12 medium-6 medium-offset-3 columns">
				<TipBox tips="" />

				<h3>{this.props.title}</h3>
				<input name="time" type="time" onChange={this.props.handleChange} />
			</div>
			</div>
			</div>
		);
	}
}

export default Time