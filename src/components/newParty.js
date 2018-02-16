/* eslint-disable */
import React from 'react';
import { Route } from 'react-router-dom'; 
import questionsList from './dummy-data';
import DateComponent from './date';
// import Moment from 'react-moment';
import Theme from './theme';
import Type, { SpecQuestion } from './type';
import Menu from './menu';
import Time from './time';
import GuestListForm from './guest-list';
import submitAction from '../actions/submit';
import {connect} from 'react-redux';
import Name from './name';
import { withRouter } from 'react-router-dom'; 
import Moment from 'moment';
import '../index.css';
import Profile from './user-profile';
const jwtDecode = require('jwt-decode');
class NewParty extends React.Component {
  constructor(props) {
		super(props);
		this.state = { 
			name: '',
			date: '',
			time: '',
			menu: {},
			number: 0,
			bigGuestList: {},
			userId: ''
        }
	}
	componentWillMount(){
		const token = window.localStorage.getItem('token');
		this.setState({ userId: jwtDecode(token).userId });
		if (!token){
			this.props.history.push('/login')
		}
	}
	onChange(e, value){
		if(typeof e === "string"){
			this.setState({[e]: value}, () => {
			});
			return null;
		}
	
		this.setState({[e.target.name]: e.target.name=== "time" ? Moment(e.target.value, "HH:mm").format('hh:mm a'):e.target.value}, ()=> {
		});	
}

	handleButtonClick(e){
		const fields = ["date","time", "bigGuestList", "name", "menu"]
		if(this.state.number=== 2){
			const date = new Date(this.state.date);
			const now = new Date();
			if(date.getTime() < now.getTime()){
				alert("you need to select a date in the future!");
				return null;
			}
		} 

		this.setState({
				number: this.state.number + 1
		});
		if(this.state.number === 6){
			this.props.submitAnswers(this.state);
			this.props.history.push('/profile')
		}
	}

	render() {
			return (
				<div>
					<div>
					</div>
					<Questions number={this.state.number} onChange={this.onChange.bind(this)} handleButtonClick={this.handleButtonClick.bind(this)}/>
				</div>
			)
	}
}


//use functional components when we dont have any internal state OR when we aren't working with lifecycle methods (didMount, willunmount etc)
const Questions = (props) => {
return (
	<div className="party-box ">
		<Route path="/new-party/question"  render={props =>                     
						<div> 
								<br />
								<input type="submit" value="Submit" />
								{/* <div className="button">
                    				<Link  to={`/new-party/question-1`}>Next</Link>
									<button className="small-4 small-offset-4 medium-2 medium-offset-5 columns signUpButton button large"><Link  to={`/new-party/question-1`}>Next</Link></button>

                  				</div>	 */}
						</div>}/>
						
			{questionsList.map((question, index)=> {
			if (props.number === index) {
					return (<div key={index}>   
							<Question index={index} question={question} onChange={props.onChange}/>
							<br />
								<button className="small-4 small-offset-4 medium-2 medium-offset-5 columns nextButton button large" onClick={props.handleButtonClick}>{props.number !== 6? "Next": "Submit Answers"} </button>
						</div>)
						}
						return null
				} 
						
				)
		}
	</div>
);
}

const Question = (props) => {
return (
	<div>
		<label>
			{props.index === 0? <div><Type  subQuestions={props.question.subQuestions} handleChange={props.onChange}/></div>: " "} 
			{props.index === 1? <div><Theme title={props.question.title} handleChange={props.onChange}/></div>: " "} 
			{props.index === 2? <div><DateComponent  title={props.question.title} handleChange={props.onChange}/></div> : " "}
			{props.index === 3? <div><Time title={props.question.title} handleChange={props.onChange}/></div>: " "} 
			{props.index === 4? <div><GuestListForm title={props.question.title} handleChange={props.onChange}/></div>: " "}
			{props.index === 5? <div><Name title={props.question.title} handleChange={props.onChange}/></div>: " "} 
			{props.index === 6? <div><Menu title={props.question.title} handleChange={props.onChange} /></div>: " "}
			{/* link to the profile */}
			{/* {props.index > 6 ? <div><Profile /></div>:"" } */}

			
		</label>
	</div>
)
}

const mapStoretoProps = (store) => {
	return { 
		submitResponse: store.submitReducer.submitResponse,
		eventData: store.submitReducer.eventData,
	}
}

const mapDispatchtoProps = (dispatch) => {
	return {
		submitAnswers: (formData) => (dispatch(submitAction(formData)))
	}
}
export default connect(mapStoretoProps, mapDispatchtoProps)(withRouter(NewParty));