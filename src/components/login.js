/* eslint-disable */

import {connect} from 'react-redux';
import {withRouter}  from 'react-router-dom';
import React from 'react';
import loginAction from '../actions/login'; 

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
  }
  componentWillMount(){
    if (window.localStorage.getItem('token')) {
      this.props.history.push('/new-party')
    }
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.token || this.props.token){
        this.props.history.push('/new-party')   
    }
  }
  onChange(e){
    e.preventDefault();
    this.setState({
      [e.target.name] : e.target.value
    });
  }
  handleClick(e){
    e.preventDefault();
    this.props.login(this.state);
    //submit form 
  }
  render() {
    if (window.localStorage.getItem('token')) {
      this.props.history.push('/new-party')
    }
    return (
      <div>
        <div className="row">
          <div className="small-12 medium-8 columns userRegInput">
            <h2>Login</h2>
            <form>
              <div>
                <div className="row">
                  <div className="small-12 medium-8 medium-offset-2 columns">
                    <label>
                      <input placeholder="username" type="text" name="userName" onChange = {this.onChange.bind(this)} required/>
                    </label>
                  </div>
                  <div className="small-12 medium-8 medium-offset-2 columns">
                    <label>
                      <input placeholder="password" type="password" name="password" onChange = {this.onChange.bind(this)} required/>
                    </label>
                  </div>
                  <div className="small-12 medium-8 medium-offset-2 columns">
                    <button className="button small-12 medium-8 " onClick={this.handleClick.bind(this)}>SIGN IN</button>
                  </div>
                </div>
                <div className="demoBox">
                Demo Account
                    username: bnamo
                    password: 12345
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
  return {
    eventData: store.submitReducer.eventData,
    token: store.loginReducer.token
  };
} 
const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials) => (dispatch(loginAction(credentials)))
  };
} 

export default connect(mapStoreToProps, mapDispatchToProps)(withRouter(Login));
