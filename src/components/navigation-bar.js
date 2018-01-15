import React from 'react';
import {
    // BrowserRouter as Router,
    // Route,
    Link
  } from 'react-router-dom';
import NewParty from './newParty';
import Profile from './user-profile';
const NavigationBar = () => (
  <div>
    <nav className="navigation" role="navigation">
      <ul className="header">
        <li>LOGO </li>
        <li><Link to="/new-party" >New Party </Link></li>
        <li><Link to="/profile" >Profile </Link></li>
        <li><Link to="/about"  >About </Link></li>
        <li><Link to="/newUser"  >New User</Link></li>
        <li><Link to="/logIn"   >logIn </Link></li>
      </ul>
    </nav>
  </div>
)
export default NavigationBar;



  
  