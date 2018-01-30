import React from 'react';
import TipBox from './tipBox';
class Name extends React.Component {
	constructor(props){
		super(props)
	}

	render() {
		return ( 
			<div> 
				<TipBox tips="A name to commemorate this event"/>

				<h3>{this.props.title}</h3>
				<input name="name" type="text"  onChange={this.props.handleChange} />
			</div>
		);
	}
}

export default Name