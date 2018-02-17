/* eslint-disable */

import React from 'react';

class Type extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
	subQuestionType: ""
   };
}

// handleChange(e){
// 	e.preventDefault();
// 	this.setState({subQuestionType: e.target.value});
// }
// handleSubQuestionChange(e){
// 	e.preventDefault();
// 	this.setState({
// 		[e.target.name]: e.target.value
// 	});

// }
// handleClick(e){
// 	e.preventDefault();
// 	this.props.handleChange("subquestion", this.state)
// }

// index.js:2177 Warning: Use the `defaultValue` or `value` props on 
//<select> instead of setting `selected` on <option>.
render() {
	return (
		<div>
		
			<div className="row">
				<div className="small-12 medium-8 columns main">
			<h3>What type of party are you planning?</h3>
			<select name="type" onChange={this.props.handleChange}>
				<option value="">party option</option>
				<option value="dinnerParty">Dinner Party</option>
				<option value="cocktail">Cocktail Party</option>
			</select>

			{/* {this.state.subQuestionType? <div>{this.props.subQuestions
			[this.state.subQuestionType].map((question, index) =>(
			<SpecQuestion key={index} handleSubQuestionChange=
			{this.handleSubQuestionChange.bind(this)} question={question} />))}
			<button onClick={this.handleClick.bind(this)}>Submit
			 </button> </div>: ''} */}

		</div>
		<div className="small-12 medium-3 columns aside">
			<div className="tipTitle"> general time guide</div>
			<div><b>Cocktail Party: </b><span>The average cocktail party lasts 2-3 hours during which guests snack on a simple spread of food and imbibe on great cocktails while chatting with other guests. </span></div>
			<div><b>Dinner Party:   </b><span> a party of people assembled to have dinner together </span></div>
		</div>
		</div>

		</div>
	)
	}
}


export const SpecQuestion = (props) => {
	return (
		<div>
			<label>{props.question.title}:</label>
				 <select name={props.question.title} onChange={props.handleSubQuestionChange}>
					 <option value="No">No</option>
					 <option value="Yes">Yes</option>
				 </select>
		</div>
	)
}
export default Type