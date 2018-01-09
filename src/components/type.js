import React from 'react';

class Type extends React.Component {
  constructor(props) {
   super(props);
	this.state = {
		subQuestion: '',
		number: 0,
	}
}

handleChange(e){
	this.setState({subQuestion: e.target.value});
}


// index.js:2177 Warning: Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>.
render() {
    return (
			<div>
				<select onChange={this.handleChange}>
					<option  value="dinnerParty">Dinner Party</option>
					<option value="cocktailParty">Cocktail Party</option>
					<option value="potluck">Potluck</option>
				</select>
				{/* {this.state.subQuestion? props.subQuestions[this.state.subQuestion].map(): ''} */}


			</div>
    )
	}
}


export default Type