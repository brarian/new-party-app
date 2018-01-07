import React from 'react';

class Type extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
    value: 'Dinner Party'
	 };
	 this.handleChange = this.handleChange.bind(this);
	 this.handleSubmit = this.handleSubmit.bind(this);
	}

handleChange(event) {
	this.setState({value: event.target.value});
}

handleSubmit(event) {
	event.preventDefault();
	alert('Your Picked a : ' + this.state.value);
	
}
// index.js:2177 Warning: Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>.
render() {
    return (
			<div>
				<select>
					<option selected value="Dinner Party">Dinner Party</option>
					<option value="Cocktail Party">Party</option>
					<option value="Potluck">Potluck</option>
				</select>
			</div>
    )
	}
}


export default Type