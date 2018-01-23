import React from 'react';
import {Route, Link, Switch} from 'react-router-dom'; 
import {questionsList} from './dummy-data';
import Date from './date';
import Moment from 'react-moment';
import Theme from './theme';
import Type, { SpecQuestion } from './type';
import Menu from './menu';
import Time from './time';
import GuestListForm from './guest-list';
import submitAction from '../actions/submit';
import {connect} from 'react-redux';
import Name from './name';
import { withRouter } from 'react-router-dom'; 

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
			bigGuestList: {}
        }
	}
	componentWillMount(){
		const token = window.localStorage.getItem('token');
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
		this.setState({[e.target.name]: e.target.value}, ()=> {
			console.log("==================>",this.state)
		});	
}

//!!! work on this!!!! this is what will have to go in the action, 
	handleButtonClick = (e) => {
			this.setState({
					number: this.state.number + 1
			});
			if(this.state.number === 5){
				this.props.submitAnswers(this.state);
			}
	}

	render() {
		
		// const {name, date, time } = this.state;
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
			{props.index <= 5? props.question.title: ''}
			{props.index === 0? <div><Date handleChange={props.onChange}/></div>: " "} 
			{props.index === 1? <div><Time handleChange={props.onChange}/></div>: " "} 
			{props.index === 2? <div><GuestListForm handleChange={props.onChange}/></div>: " "}
			{props.index === 3? <div><Theme handleChange={props.onChange}/></div>: " "} 
			{props.index === 4? <div><Name handleChange={props.onChange}/></div>: " "} 
			{props.index === 5? <div><Type  subQuestions={props.question.subQuestions} handleChange={props.onChange}/></div>: " "} 
			{props.index === 6? <div><Menu handleChange={props.onChange} /></div>: " "}
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
	return { 
		submitResponse: store.submitReducer.submitResponse,
		eventData: store.submitReducer.eventData
	}
}

const mapDispatchtoProps = (dispatch) => {
	return {
		submitAnswers: (formData) => (dispatch(submitAction(formData)))
	}
}
export default connect(mapStoretoProps, mapDispatchtoProps)(withRouter(NewParty));