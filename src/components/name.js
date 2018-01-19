import React from 'react';

class Name extends React.Component {
	constructor(props){
		super(props)
	}

	render() {
		return ( 
			<div> 
				<input name="name" type="text"  onChange={this.props.handleChange} />
			</div>
		);
	}
}

export default Name