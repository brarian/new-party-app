import React from 'react';

class Name extends React.Component {

	render() {
		return ( 
			<div> 
				<div className="row">
				<div className="small-12 medium-8 columns main">
				<h3>What would you like to name your party?</h3>
				<input name="name" type="text"  onChange={this.props.handleChange} />
			</div>
			<div className="small-12 medium-3 columns aside">
				<div className="tipTitle"> </div>
			</div>
			</div>
			</div>
		);
	}
}

export default Name