import React from 'react';
import loginAction from '../actions/login';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'; 

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
  }
  onChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name] : e.target.value
    });
  }
  handleClick = (e) => {
    e.preventDefault();
    this.props.login(this.state);
    //submit form 
  }
  render() {
    if(this.props.userName){
      console.log("Login was successful", this.props.userName, this.props.password);
    }
    if(this.props.eventData){
      console.log("======================>login", this.props.eventData);
    }

    if (this.props.username && window.localStorage.getItem('token')) {
      this.props.history.push('/new-party')
    }
    return (
      <div>
        <div className="party-box">
        <h1>Sign Into Your Account</h1>
          <section className="login-style">
            <label> username</label>
            <input type="text" name="userName" onChange = {this.onChange.bind(this)} required/>
            <br/>
            <label>password</label>
            <input type="password" name="password" onChange = {this.onChange.bind(this)} required/>
            <br />
            <button onClick={this.handleClick.bind(this)} >sign into my account</button>
          </section>
        </div>
      </div>
    )
  }
} 

const mapStoreToProps = (store) => {
  return {
    username: store.loginReducer.userName,
    email: store.loginReducer.email,
    eventData: store.submitReducer.eventData
  };
} 
const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials) => (dispatch(loginAction(credentials)))
  };
} 

export default connect(mapStoreToProps, mapDispatchToProps)(withRouter(Login));
