import React from 'react';

class Type extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
	   subQuestionType: ""
   };
}

handleChange(e){
	e.preventDefault();
	this.setState({subQuestionType: e.target.value});
}
handleSubQuestionChange(e){
	e.preventDefault();
	this.setState({
		[e.target.name]: e.target.value
	});

}
handleClick(e){
	e.preventDefault();
	this.props.handleChange("subquestion", this.state)
}

// index.js:2177 Warning: Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>.
render() {
	return (
		<div>
			<div className="row">
				<div class="small-12 medium-6 medium-offset-3 columns">
			<h3>{this.props.title}</h3>
			<select onChange={this.handleChange.bind(this)}>
				<option value="">party option</option>
				<option  value="dinnerParty">Dinner Party</option>
				<option value="cocktail">Cocktail Party</option>
				<option value="potluck">Potluck</option>
			</select>

			{this.state.subQuestionType? <div>{this.props.subQuestions[this.state.subQuestionType].map((question, index) =>(
				<SpecQuestion key={index} handleSubQuestionChange={this.handleSubQuestionChange.bind(this)} question={question} />))}
				<button onClick={this.handleClick.bind(this)}>Submit </button> </div>: ''}

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