/*eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import React from 'react';
import cheers from '../images/cheers.jpg';
import balloon from '../images/balloon.png';
import pencil from '../images/pencil.png';
import execute from '../images/execute.png';


class LandingPage extends React.Component {


	render() {
		return (
			<div >
<div className="small-12 medium-6 columns landing-bg"></div>
<div>
<img src={cheers} id="bg" alt="people cheer'sing with drinks"/>
</div>
	<h1>
		party planning made easy
	</h1>
	<div >
		<button className="small-4 small-offset-4 medium-2 medium-offset-5 columns signUpButton button large"> <Link to="/newUser">Join Us!</Link></button>
	</div>
	<div>
	<div className="grid-x small-up-1 small-offset-3 medium-up-3 medium-offset-1 symbol">
		<div className="column"><img src={pencil} alt="icon of a pencil" className="sym"/><p>1. Plan  </p></div>
		<div className="column "><img src={execute} alt="icon of a checklist" className="sym"/><p>2. Execute</p></div>
		<div className="column "><img src={balloon} alt="icon of a balloon" className="sym"/><p>3. Enjoy </p></div>
	</div>
	</div>
			</div>
			)
	}
} 

export default LandingPage