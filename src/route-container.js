import React, {Fragment} from 'react';
import {
    // BrowserRouter as Router,
    Route,
    // Link
  } from 'react-router-dom';
import NewParty from './components/newParty';
import Profile from './components/user-profile';
import About from './components/about';
import NewUserRegistration from './components/new-user-registration';
import LogIn from './components/login';
import  LogOut from './components/logout';
import landingPage from "./components/landingPage";
import Status from "./components/statusUpdate";
class ReactContainer extends React.Component {
    render() {
        return (
            <Fragment>
                <Route exact path="/" component={landingPage}/>
                <Route exact path="/new-party" component={NewParty}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/about" component={About}/> 
                <Route path="/newUser" component={NewUserRegistration}/>
                <Route path="/logIn" component={LogIn}/>
                <Route path="/logOut" component={LogOut}/>
                <Route path="/party/:id/status" component={Status} />
            </Fragment>
        )
    }
}

export default ReactContainer