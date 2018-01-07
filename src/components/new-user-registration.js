import React from 'react';
import { connect } from 'tls';

class SignIn extends React.Component {
	render() {
		return (
			<div>
					<h1>Create a New Account</h1>
					<div className="party-box">
						<section className="login-style">
							<label> First Name</label>
							<input type="text" placeholder={this.props.name} required/>
							<br />
							<label> Last Name</label>
							<input type="text" placeholder={this.props.lastname} required/>
							<br />
							<label> Email</label>
							<input type="email" placeholder={this.props.email} required/>
							<br />
							<label> Username</label>
							<input type="text" placeholder={this.props.username} required/>
							<br />
							<label>Create a Password</label>
							<input type="password" placeholder={this.props.password} required/>
							<button>create a new account</button>
						</section>
					</div>
				</div>
		)
	}
} 

const connectedProfile = (props) => {
	return  (
			<SignIn name={"Cliff"} lastname={"Paul"} email={"cliffsemail@gmail"} username={"Sonic!!!"} password={"123456"}/>
	)
}
export default connectedProfile;
