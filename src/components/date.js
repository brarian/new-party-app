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
			Try to pick a date at least 2 - 3 weeks in the future to give yourself time to get ready. 
			Make sure to pick a date when most of your guests are free. 
			Do you know of another party happening
			or event has everyone booked?
			You may have to do some asking around but it's worth it to ensure you have a gret party. 
			</div>
			</div>
		</div>
		);
	}
}

export default Date