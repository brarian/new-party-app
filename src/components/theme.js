import React from 'react';


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
				 <select>
					 
					 <option value="No">No Theme</option>
					 <option value="Yes">Yes, I have a Theme</option>
				{/* {(value?=="Yes"){ return <ThemeLabel />}} */}
			
				 </select>
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
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(e) {
		this.setState({
			value: e.target.value
		});
	}
	handleSubmit(e) {
		e.preventDefault();
		alert('themelabel', this.state.value);
	}

	render(){
		return (
			<div>
				<form>
					<label>
						<input type="text" value={this.state.value} onChange={this.handleChange} />
					</label>
					<input type="submit" value="submit" />
				</form>
			</div>
		);
	}
}