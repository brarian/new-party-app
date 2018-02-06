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
    return (
      <div>

        <div class="row party-box">
          <div class="small-6 medium-6 medium-offset-3 small-offset-3">
            <form>
              <div>
                <div class="row">
                  <div className="small-12 medium-12 columns">
                    <label>username
                      <input type="text" name="userName" onChange = {this.onChange.bind(this)} required/>
                    </label>
                  </div>
                  <div className=" small-12 medium-12 columns">
                    <label>password
                      <input type="password" name="password" onChange = {this.onChange.bind(this)} required/>
                    </label>
                  </div>
                  <div className="small-12 medium-12">
                    <button className="button small-12 medium-12" onClick={this.handleClick.bind(this)}>SIGN IN</button>
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
