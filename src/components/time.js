import React from 'react';

class Time extends React.Component {

	render() {
		//find another time input
		return (
			<div> 
				<div className="row">
					<div className="small-12 medium-8 columns main">
						{/* <TipBox tips="" /> */}

						<h3>{this.props.title}</h3>
						<input name="time" type="time" onChange={this.props.handleChange} />
					</div>
					<div className="small-12 medium-3 columns aside">
						<div className="tipTitle"> general time guide</div>
						<div><b>Cocktail: </b><span>Usually begins between 5pm-7pm. Lasts 2-3 hours.</span></div>
						<div><b>Dinner:   </b><span>Usually begins between 6pm - 7pm. Lasts last 3 -4 hours </span></div>
					</div>
			</div>
			</div>
		);
	}
}

export default Time