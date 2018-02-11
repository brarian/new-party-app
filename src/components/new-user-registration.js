/*eslint-disable */
import { withRouter } from 'react-router-dom'; 
import {connect } from 'react-redux';
import React from 'react';
import newUserAction from '../actions/newUser';

class NewUserRegistration extends React.Component {
	constructor(props){
		super(props)
		this.onChange = this.onChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

onChange(e){
	e.preventDefault();
	this.setState({
		[e.target.name] : e.target.value
	});
}
handleClick(e){
	e.preventDefault();
	this.props.signUp(this.state);
//submit form 
}
	render() {
		if (this.props.username) {
      this.props.history.push('/new-party')
		}
		
		return (
			<div>
				<div className="row">
          <div className="small-12 medium-8">
            <form>
              <div>
                <div className="row">
                  <div className=" small-12 medium-8 medium-offset-3  columns">
                    <label>First Name
										<input type="text" name="firstName"  onChange = {this.onChange} required/>
                    </label>
                  </div>
                  <div className="small-12 medium-8 medium-offset-3 columns">
                    <label>Last Name
										<input type="text" name="lastName"  onChange = {this.onChange} required/>
                    </label>
                  </div>
									<div className="small-12 medium-8 medium-offset-3  columns">
                    <label>Email
										<input type="email"  name="email"  onChange = {this.onChange} required/>
                    </label>
                  </div>
									<div className="small-12 medium-8  medium-offset-3 columns">
                    <label>Username
										<input type="text"  name="userName"   onChange = {this.onChange} required/>
                    </label>
                  </div>
									<div className="small-12 medium-8 medium-offset-3 columns">
                    <label>Create a Password
										<input type="password" name="password"   onChange = {this.onChange} required/>
                    </label>
                  </div>
                  <div className="small-12 medium-8 medium-offset-3 columns">
                    <button className="button small-12 medium-8 medium-offset-3 " onClick={this.handleClick}>CREATE MY ACCOUNT</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
			</div>
		)
	}
} 

const mapStoreToProps = (store) => {
	console.log(store.newUserReducer.userName)
  return {
    username: store.newUserReducer.userName,
    email: store.newUserReducer.email,
    eventData: store.newUserReducer.eventData
  };
} 

const mapDispatchToProps = (dispatch) => {
	return {
		signUp: (credentials) => dispatch(newUserAction(credentials))
	}
}
export default connect(mapStoreToProps, mapDispatchToProps)(withRouter(NewUserRegistration));
