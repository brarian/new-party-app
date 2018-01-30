import React from 'react';

class TipBox extends React.Component {
	constructor(props){
		super(props)
	}
	
	render() {
		return (
		<div className="tipBox"> 
        {this.props.tips}
		</div>
		);
	}
}

export default TipBox