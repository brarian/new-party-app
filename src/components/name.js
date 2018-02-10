import React from 'react';

class Name extends React.Component {

	render() {
		return ( 
			<div> 
				<div className="row">
				<div className="small-12 medium-6 medium-offset-3 columns">

				<h3>{this.props.title}</h3>
				<input name="name" type="text"  onChange={this.props.handleChange} />
			</div>
			</div>
			</div>
		);
	}
}

export default Name