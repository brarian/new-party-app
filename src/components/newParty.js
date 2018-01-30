import React from 'react';
import {Route, Link, Switch} from 'react-router-dom'; 
import {questionsList} from './dummy-data';
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
import TipBox from './tipBox';
const jwtDecode = require('jwt-decode');

class NewParty extends React.Component {
  constructor(props) {
		super(props);
		this.state = { 
			name: '',
			date: '',
			// use moment to save date and subtract 24hours, then render the last set of questions 
			time: '',
			// need take menu out of state if the submit button will save state 
			menu: {},
			number: 0,
			// need take menu out of state if the submit button will save state 
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
	onChange = (e, value) => {
		if(typeof e === "string"){
			this.setState({[e]: value}, () => {
				console.log("========I came here==========>", value, this.state)
			});
			return null;
		}
	
		this.setState({[e.target.name]: e.target.name=== "time" ? Moment(e.target.value, "HH:mm").format('hh:mm a'):e.target.value}, ()=> {
		});	
}

//!!! work on this!!!! this is what will have to go in the action, 
	handleButtonClick = (e) => {
			if(this.state.number=== 0){
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
			if(this.state.number === 5){
				this.props.submitAnswers(this.state);
			}
	}

	render() {
		console.log(this.state)
			return (
				<div>
					<div className="party-box">
						<h1>Dinner Party</h1>
					</div>
					<Questions number={this.state.number} onChange={this.onChange.bind(this)} handleButtonClick={this.handleButtonClick.bind(this)}/>
				</div>
			)
	}
}


//use functional components when we dont have any internal state OR when we aren't working with lifecycle methods (didMount, willunmount etc)
const Questions = (props) => {
return (
	<div className="party-box">
		<Route path="/new-party/question"  render={props =>                     
						<div> 
								<br />
								<input type="submit" value="Submit" />
								<Link to={`/new-party/question-1`}>Next</Link>
						</div>}/>
						
			{questionsList.map((question, index)=> {
			if (props.number === index) {
					return (<div>   
							<Question index={index} question={question} onChange={props.onChange}/>
							<br />
								<button onClick={props.handleButtonClick}>{props.number !== 5? "Next": "Submit Answers"} </button>
						</div>)
						}}
				)
		}
	</div>
);
}

const Question = (props) => {
return (
	<div>
		<label>
			{props.index === 0? <div><DateComponent  title={props.question.title} handleChange={props.onChange}/></div> : " "} 

			{props.index === 1? <div><Time title={props.question.title} handleChange={props.onChange}/></div>: " "} 
			
			{props.index === 2? <div><GuestListForm title={props.question.title} handleChange={props.onChange}/></div>: " "}
			{props.index === 3? <div><Theme title={props.question.title} handleChange={props.onChange}/></div>: " "} 
			{props.index === 4? <div><Name title={props.question.title} handleChange={props.onChange}/></div>: " "} 
			{props.index === 5? <div><Type  subQuestions={props.question.subQuestions} handleChange={props.onChange}/></div>: " "} 
			{props.index === 6? <div><Menu title={props.question.title} handleChange={props.onChange} /></div>: " "}
			{props.index > 6? <div>< SpecQuestion handleSubQuestionChange={props.onChange} question={props.question}/></div>: " "}

			
		</label>
	</div>
)
}

class List extends React.Component {
constructor(props){
	super(props);
		this.state = {
			guests: [],
			guest: ""
		}
	}   

	onChange = (e) => {
		e.preventDefault();
		this.setState({
			guest: e.target.value,
		});
	}

	onSubmit = (e) => {
		e.preventDefault();
		if(this.state.guest){
			const guests = this.state.guests;
			guests.push(this.state.guest);
			this.setState({
				guests,
			})
		}
	}
	render() {
		return (
			<div>
				{/* <input type="text" onChange={this.onChange.bind(this)} /> */}
				<button type="button" onClick={this.onSubmit.bind(this)}>Submit</button>
				<ul className="list">
						{this.state.guests.map((guest, index)=> (<li key={index}>{guest}</li>))}
				</ul>
			</div>
		)
	}
}

const mapStoretoProps = (store) => {
	console.log(store);
	return { 
		submitResponse: store.submitReducer.submitResponse,
		eventData: store.submitReducer.eventData,
		// userData: store
	}
}

const mapDispatchtoProps = (dispatch) => {
	return {
		submitAnswers: (formData) => (dispatch(submitAction(formData)))
	}
}
export default connect(mapStoretoProps, mapDispatchtoProps)(withRouter(NewParty));