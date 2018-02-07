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
          	<div className="small-12 medium-8 columns main">
				{/* <TipBox tips=""/> */}
				<h3>{this.props.title}</h3>
				<input name="date" type="date" onChange={this.props.handleChange} />
			</div>
			<div className="small-12 medium-3 columns aside">
			<div className="tipTitle"><b>picking a date</b> </div>
			make sure to pick a date when most of your guests are free. Do you know of another party happening or a community event or holiday that has everyone booked? You may have to do some asking around beforehand to figure out if this is the case.
			</div>
			</div>
		</div>
		);
	}
}

export default Date