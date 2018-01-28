import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'; 
import partyDataAction from '../actions/partyData';
const jwtDecode = require('jwt-decode');

class Profile extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			userData: {},
			partyData: []
		}
	}

	componentWillMount(){
		const token = window.localStorage.getItem('token');
		if (!token){
			this.props.history.push('/login')
		}
		const userData = jwtDecode(token);
		this.setState({ userData });
		this.props.profile(userData.userId)
			// .then(() => {
			// 	this.setState({ partyData: this.props.partyData })
			// });
		// console.log('props', this.props.partyData);
	}

	componentWillReceiveProps(nextProps) {
		this.setState({ partyData: nextProps.partyData });
	};

	render() {
		console.log(this.state.partyData, 'state');
		return (
			<div>
				<div className="party-box">
				<h1>Profile</h1>
					<ul>
						<div> <strong>Name:</strong> {this.state.userData.userName}</div>
						<div> <strong>Email:</strong> {this.state.userData.email}</div>
						<br />
						{/* component that renders recent parties */}
						{ 
							this.state.partyData.map(party =>{
								return (
									<div className="small-box" >
										<div> <strong>Party Name:</strong> {party.name} </div>
										<div> <strong>Party Date:</strong> {party.date}</div>
										<div> <strong>Party Time:</strong> {party.time}</div>
										<br />
									</div>
								)
							}) 
						}
					</ul>
				</div>
			</div>
		)
	}
} 

const mapStoreToProps = (store) => {
	return {
		partyData: store.partyDataReducer 
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		profile: (userId) => dispatch(partyDataAction(userId))
	}
}

export default connect(mapStoreToProps, mapDispatchToProps)(Profile);
// export default connect({}, mapDispatchToProps)(withRouter(Profile));
// export default Profile