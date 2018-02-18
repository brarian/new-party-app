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
				<div className="tipTitle"> A Quick Note! </div>
				If you'll be serving alcohol at your party use this link to estimate how much to buy: 
				<a href="https://www.evite.com/pages/party/drink-calculator" target="_blank" rel="noopener noreferrer"> Alcohol Calculator </a>
				<br />
				
			</div>
			</div>
			</div>
		);
	}
}

export default Name