import React from 'react';

class SignIn extends React.Component {
    render() {
        return (
            <div>
                <h1>Create a New Account</h1>
                <div className="party-box">
                    <section className="login-style">
                        <label> First Name</label>
                        <input type="email" required/>
                        <br />
                        <label> Last Name</label>
                        <input type="email" required/>
                        <br />
                        <label> Email</label>
                        <input type="email" required/>
                        <br />
                        <label> Username</label>
                        <input type="email" required/>
                        <br />
                        <label>Create a Password</label>
                        <input type="password" required/>
                    
                     
                        <button>create a new account</button>
                    </section>
                </div>
            </div>
        )
    }
} 

export default SignIn;
