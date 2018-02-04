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

        <div class="row party-box">
          <div class="small-12 medium-6 medium-offset-3 columns">
            <form>
              <div>
                <div class="row">
                  <div className="medium-12 columns">
                    <label>username
                      <input type="text" name="userName" onChange = {this.onChange.bind(this)} required/>
                    </label>
                  </div>
                  <div className="medium-12 columns">
                    <label>password
                      <input type="password" name="password" onChange = {this.onChange.bind(this)} required/>
                    </label>
                  </div>
                  <div className="medium-12 columns">
                    <button className="button" onClick={this.handleClick.bind(this)}>SIGN IN</button>
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
  return {
    username: store.loginReducer.userName,
    password: store.loginReducer.password,
    eventData: store.submitReducer.eventData
  };
} 
const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials) => (dispatch(loginAction(credentials)))
  };
} 

export default connect(mapStoreToProps, mapDispatchToProps)(withRouter(Login));
