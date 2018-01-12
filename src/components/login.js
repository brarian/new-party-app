import React from 'react';
import loginAction from '../actions/login';
import {connect} from 'react-redux';
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
    if(this.props.username){
      console.log("Login was successful", this.props.username, this.props.email);
    }
    return (
      <div>
        <h1>Sign Into Your Account</h1>
        <div className="party-box">
          <section className="login-style">
            <label> username</label>
            <input type="email" name="email" onChange = {this.onChange.bind(this)} required/>
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
    username: store.loginReducer.username,
    email: store.loginReducer.email
  };
} 
const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials) => (dispatch(loginAction(credentials)))
  };
} 

export default connect(mapStoreToProps, mapDispatchToProps)(Login);
