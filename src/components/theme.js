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
				<div className="row party-box"> 
       			 <div className="small-12 medium-6 medium-offset-3 columns">
				 <TipBox tips=""/>

				<h3>{this.props.title}</h3>
				 <select onChange={this.handleChange}>
				 	<option value="">theme option</option>
					 <option value="No">No Theme</option>
					 <option value="Yes">Yes, I have a Theme</option>
				 </select>
				 {this.state.value === "Yes"? <ThemeLabel /> : ''}
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
		this.state = {
			value: ''
		}
	}

	render(){
		return (
			<div>
					<label>
						<input type="text"  onChange={this.props.onChange} />
					</label>
			</div>
		);
	}
}