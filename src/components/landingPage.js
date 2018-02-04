import React from 'react';
import blankSlate from '../images/blankSlate.jpg';
import WebFont from 'webfontloader';
import cheers from '../images/cheers.jpg'
WebFont.load({
  google: {
    families: ['Titillium Web:300,400,700', 'sans-serif']
  }
});
class LandingPage extends React.Component {


	render() {
		return (
			<div >
<div className="small-12 medium-6 columns landing-bg"></div>
<img src={cheers} id="bg" alt="people cheer'sing with drinks"/>>
<div className="text"> Easy Event Planning</div>


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
			</div>
			)
	}
} 

export default LandingPage