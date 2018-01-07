import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div>
        <h1>Sign Into Your Account</h1>
        <div className="party-box">
          <section className="login-style">
            <label> username</label>
            <input type="email" required/>
            <br/>
            <label>password</label>
            <input type="password" required/>
            <br />
            <button>sign into my account</button>
          </section>
        </div>
      </div>
    )
  }
} 

export default Login;
