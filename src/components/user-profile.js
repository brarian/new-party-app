import React from 'react';
import { connect } from 'tls';
import { withRouter } from 'react-router-dom'; 
import partyDataAction from '../actions/partyData';

class Profile extends React.Component {
	componentWillMount(){
		const token = window.localStorage.getItem('token');
		if (!token){
			this.props.history.push('/login')
		}
	}
	render() {
		return (
			<div>
				<div className="party-box">
				<h1>Profile</h1>
					<ul>
						<div> Name: {this.props.name}</div>
						<div> Email: {this.props.email}</div>
						{/* component that renders recent parties */}
							<div className="small-box" >
									<div> <strong>Party Name: {this.props.partyname}</strong></div> 
									<div>Party Date: {this.props.date}</div>  
									<div>party Size: {this.props.size}</div>
							</div>
						</ul>
				</div>
			</div>
		)
	}
} 

// const mapStoreToProps = (store) => {
// 	return {
// 		date: store.partyDataReducer.date,
// 		time: store.partyDataReducer.time,
// 		bigGuestList: store.partyDataReducer.bigGuestList,

// 	}
// }

// const matchDispatchToProps = (dispatch) => {
// 	return {
// 		profile: (user) => dispatch(partyDataAction(user))
// 	}
// }


// export default connect(mapStoreToProps, matchDispatchToProps)(withRouter(Profile));
export default Profile