import React from 'react';
// import TipBox from './tipBox';

class Date extends React.Component {
	// constructor(props){
	// 	super(props)
	// }
	
	render() {
		return (
		<div> 
			<div className="row">
          	<div className="small-12 medium-6 medium-offset-3 columns">
				{/* <TipBox tips=""/> */}
				<h3>{this.props.title}</h3>
				<input name="date" type="date" onChange={this.props.handleChange} />
			</div>
			</div>
		</div>

		);
	}
}

export default Date