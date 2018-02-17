/* eslint-disable */

import React from 'react';
import TipBox from './tipBox';

class Theme extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
		 value: ''
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
 
 render() {
		 return (
			 <div>
				<div className="row"> 
       			 <div className="small-12 medium-8 columns main">

				<h3>Do you have a theme? </h3>
				 <select onChange={this.handleChange}>
				 	<option value="">theme option</option>
					 <option value="No">No Theme</option>
					 <option value="Yes">Yes, I have a Theme</option>
				 </select>
				 {this.state.value === "Yes"? <ThemeLabel handleChange={this.props.handleChange} /> : ''}
			 </div>
			 <div className="small-12 medium-3 columns aside">
			 <div className="tipTitle"> On Themes</div>
			 When planning your party, it might help you to choose a theme. 
			 This doesn't mean an elaborate costume party, it can be as simple as flavor or color that is present 
			 throughout the entire evening. A creative theme can make your party 
			 feel special without adding to your budget, and it will help you come up 
			 with ideas for food, drinks, and decorations. 
			However you don't have to have a theme to have a great party.
			</div>
			</div>
			</div>
		 )
	 }
 }
 

export default Theme

//cant nest forms, how to render side by side?
class ThemeLabel extends React.Component {

	constructor(props) {
		super(props);
	}
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		value: ''
	// 	}
	// }

	render(){
		return (
			<div>
					<label>
					<input name="theme" type="text" onChange={this.props.handleChange} />
					</label>
			</div>
		);
	}
}