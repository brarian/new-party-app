import React, {Fragment} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
import NewParty from './components/newParty';
import Profile from './components/user-profile';
import About from './components/about';
import SignIn from './components/new-user-registration';
import LogIn from './components/login';
class ReactContainer extends React.Component {
    render() {
        return (
            <Fragment>
                <Route exact path="/new-party" component={NewParty}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/about" component={About}/>
                <Route path="/signIn" component={SignIn}/>
                <Route path="/logIn" component={LogIn}/>
            </Fragment>
        )
    }
}

export default ReactContainer