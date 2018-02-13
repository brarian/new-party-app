/* eslint-disable */

import React from 'react';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom'; 
import getPartyDataAction from '../actions/getPartyAction';

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

		this.setState(userData)
		this.props.profile(userData.userId)
		//this.setState({ userData });
		// this.props.profile(userData.userId)
		// 	.then(() => {
				
		// 	});
	}

	componentWillReceiveProps(nextProps) {
		this.setState({ partyData: nextProps.partyData });
	};

	redirectToStatusPage(party){
		this.props.history.push(
			{
				pathname: `/party/${party._id}/status`,
				state: { party, }
			  }
			)
	}

	render() {
		return (
			<div>
				<div className="party-box ">
				
					<ul>
						<div> <strong>Name:</strong> {this.state.userName}</div>
						<div> <strong>Email:</strong> {this.state.email}</div>
						<br />
						{/* component that renders recent parties */}
						{ 
							this.props.partyData.map((party, index )=>{
								return (
									<div key={index} className="small-box" >
										<div> <strong>Party Name:</strong> {party.name} </div>
										<div> <strong>Party Date:</strong> {party.date}</div>
										<div> <strong>Party Time:</strong> {party.time}</div>
										<div> <strong>Party Menu:</strong> {party.menu}</div>
										<div> <strong>Guest List :</strong> {party.bigGuestList}</div>
										<button onClick={(e)=>{ 
											e.preventDefault();
											this.redirectToStatusPage(party)}}>Status Update Button</button>
										<br />
									</div>
								)
							}) 
						}
					</ul>
				</div>
				<div className="medium-4">different box</div>

			</div>
		)
	}
} 

const mapStoreToProps = (store) => {
	return {
		partyData: store.partyDataReducer.parties || [] 
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		profile: (userId) => dispatch(getPartyDataAction(userId))
	}
}

export default connect(mapStoreToProps, mapDispatchToProps)(Profile);
// export default connect({}, mapDispatchToProps)(withRouter(Profile));
// export default Profile