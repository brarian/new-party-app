/*eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import React from 'react';
import cheers from '../images/cheers.jpg';
import balloon from '../images/balloon.png';
import pencil from '../images/pencil.png';
import execute from '../images/execute.png';
import brunch from '../images/brunch.jpg';

class LandingPage extends React.Component {


	render() {
		return (
			<div >
<div className="small-12 medium-6 columns landing-bg"></div>
<div>
<img src={brunch} alt="people cheer'sing with drinks"/>
</div>
	<div className="header">
		party planning made easy
	</div>
	<div >
		<button className="small-4 small-offset-4 medium-2 medium-offset-3 columns signUpButton button large"> <Link to="/newUser">Join Us!</Link></button>
	</div>
	<div>
	<div  className="heading">How Little Mix works </div>
	<div className="grid-x small-up-1 small-offset-3 medium-up-3 medium-offset-0 symbol">
		<div className="landingBox"><img src={pencil} alt="icon of a pencil" className="sym"/><p><span className="head">Plan</span> </p> Choose what type of party you’d like to have.</div>
		<div className="landingBox "><img src={execute} alt="icon of a checklist" className="sym"/><p><span className="head">Execute</span></p> Keep track of what needs to be done and when it needs to be done.</div>
		<div className="landingBox "><img src={balloon} alt="icon of a balloon" className="sym"/><p><span className="head">Entertain</span> </p>Join your guests in enjoying the wonderful party you’ve planned! </div>
	</div>
	</div>
			</div>
			)
	}
} 

export default LandingPage