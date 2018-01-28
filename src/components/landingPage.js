import React from 'react';
import setting from '../images/setting.png';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Titillium Web:300,400,700', 'sans-serif']
  }
});
class LandingPage extends React.Component {


	render() {
		return (
			<div >
				<div className="party-box">
					<h1>Fancy Party</h1>
                    <div className="boxed">
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
                    </div>
					<img src={setting} />
				</div>

			</div>
		)
	}
} 

export default LandingPage