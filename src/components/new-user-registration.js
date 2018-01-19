import React from 'react';
import {connect } from 'react-redux';
import newUserAction from '../actions/newUser';

class NewUserRegistration extends React.Component {
	constructor(props){
		super(props)
		this.onChange = this.onChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	onChange = (e) => {
		e.preventDefault();
		this.setState({
		  [e.target.name] : e.target.value
		});
	  }
	  handleClick = (e) => {
		e.preventDefault();
		this.props.signUp(this.state);
		//submit form 
	  }
	render() {
		return (
			<div>
				<div className="party-box">
				<h1>Create a New Account</h1>
				
					<section className="login-style">
						<label> First Name</label>
						<input type="text" name="firstName"  onChange = {this.onChange} required/>
						<br />
						<label> Last Name</label>
						<input type="text" name="lastName"  onChange = {this.onChange} required/>
						<br />
						<label> Email</label>
						<input type="email"  name="email"  onChange = {this.onChange} required/>
						<br />
						<label> Username</label>
						<input type="text"  name="userName"   onChange = {this.onChange} required/>
						<br />
						<label>Create a Password</label>
						<input type="password" name="password"   onChange = {this.onChange} required/>
						<button onClick={this.handleClick}>create a new account</button>
					</section>
				</div>
			</div>
		)
	}
} 

const mapDispatchToProps = (dispatch) => {
	return {
		signUp: (credentials) => dispatch(newUserAction(credentials))
	}
}
export default connect(null, mapDispatchToProps)(NewUserRegistration);
