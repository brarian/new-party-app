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
						<div><b>Cocktail: </b><span>Usually begins between 5 pm and 7 pm. Lasts two to three hours</span></div>
						<div><b>Dinner:   </b><span>Usually begins between 6 pm and 7 pm. Lasts three to four hours </span></div>
					</div>
			</div>
			</div>
		);
	}
}

export default Time