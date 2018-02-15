import React from 'react';
import logos from '../images/logos.png'
class About extends React.Component {
	render() {
		return (
			<div className="row">
				<div className="small-12 medium-8 columns userRegInput">
				<img src={logos} id="logo" alt="little mixer logo with martini glass"/>
					<div> 
						Little Mixer is an app which will help you plan a 
						party from start to finish. Hosting an event may seem 
						overwhelming but Little Mixer eases the stress of party 
						planning by giving you instructions each step of the way. 
						<br />
						<br />
					Select New Party and go through a series of questions that will be the base of your party. 
					your party. 
					Once your party will be saved in your Profile page. Inside your 
					Profile you'll find the party you planned as well as a well as 
					a timed checklist of items that need to be complete so your that 
					planning your party will be easy and stress free. 
					</div>
				</div>
			</div>
		)
	}
} 

export default About