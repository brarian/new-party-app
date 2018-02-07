import React from 'react';
import TipBox from './tipBox';
class Time extends React.Component {

	render() {
		//find another time input
		return (
			<div> 
				<div className="row">
					<div className="small-12 medium-8 columns main">
						<TipBox tips="" />

						<h3>{this.props.title}</h3>
						<input name="time" type="time" onChange={this.props.handleChange} />
					</div>
					<div className="small-12 medium-3 columns aside">
						<div className="tipTitle"> general time guide</div>
						<div><b>Cocktail: </b><span>5pm - 7 pm</span></div>
						<div><b>Dinner:   </b><span> start at 6:30 - 7, usually last 3 -4 hours </span></div>
						<div><b>potluck:  </b><span>start at 6:30 - 7, usually last 3 -4 hours </span></div>
					</div>
			</div>
			</div>
		);
	}
}

export default Time