import React from 'react';

class TipBox extends React.Component {

	render() {
		return (
		<div className="tipBox"> 
        {this.props.tips}
		</div>
		);
	}
}

export default TipBox