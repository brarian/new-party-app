import React from 'react';
import cheers from '../images/cheers.jpg';
import balloon from '../images/balloon.png';
import pencil from '../images/pencil.png';
import execute from '../images/execute.png';
import {
	Link
} from 'react-router-dom';
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
						 {/* <div className="boxed">
								<h1 > -- 1 --</h1>
								<h2>Plan a party that suits you taste, budget and style</h2>
							</div>
							<div className="boxed">
								<h1 > -- 2 --</h1>
								<h2>Recieve step by step help planning the event</h2>
							</div>
							<div className="boxed">
								<h1 > -- 3 --</h1>
								<h2>Enjoy entertaining, another line which will make the divs</h2>
							</div> */}
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
							{/* <div className="symbol">
								<div >
									
								</div>
								<div>
									
								</div>
								<div>
									<img src={balloon} className="sym"/>
								</div>

							</div> */}
			</div>
			)
	}
} 

export default LandingPage