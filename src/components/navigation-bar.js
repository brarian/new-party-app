/* eslint-disable */

import React from 'react';
import {
    Link
  } from 'react-router-dom';
// import NewParty from './newParty';
// import Profile from './user-profile';
import '../index.css'
import logos from '../images/logos.png';


const NavigationBar = () =>{
  const token = window.localStorage.getItem("token")
  if(token){
  return(
    <div>
    <div className="top-bar">
      <div className="top-bar-left">
        <ul>
        <Link to="/new-party">
          <img src={logos} id="logo" alt="little mixer logo with martini glass"/>
        </Link>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="dropdown menu" data-dropdown-menu>
          <li><Link to="/new-party">New Party </Link></li>
          <li><Link to="/profile">Profile </Link></li>
          <li><Link to="/logOut">log Out </Link></li>
        </ul>
      </div>
    </div>
</div>
  
)}
else 
  {return(

        <div>
        <div className="top-bar">
          <div className="top-bar-left">
            <ul className="dropdown menu" data-dropdown-menu>
              <Link to="/login">
                <img src={logos} id="logo" alt="little mixer logo with martini glass"/>
              </Link>
            </ul>
          </div>
          <div className="top-bar-right">
            <ul className="dropdown menu" data-dropdown-menu>
            <li><Link to="/about">About </Link></li>
            <li><Link to="/newUser">New User</Link></li>
            <li> <Link to="/logIn">log In </Link></li>
            </ul>
          </div>
        </div>
      </div>
  )}
}
 

export default NavigationBar