import React from 'react';

class Name extends React.Component {

	render() {
		return ( 
			<div> 
				<div className="row">
				<div className="small-12 medium-6 medium-offset-3 columns">

				<h3>What would you like to name your party?</h3>
				<input name="name" type="text"  onChange={this.props.handleChange} />
			</div>
			</div>
			</div>
		);
	}
}

export default Name