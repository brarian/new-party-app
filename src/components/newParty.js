import React from 'react';
import {Route, Link, Switch} from 'react-router-dom'; 
import {questionsList} from './dummy-data';
import Date from './date';
import Moment from 'react-moment';
import Theme from './theme';
import Type from './type';
import Menu from './menu';
import Time from './time';

class NewParty extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            date: '',
						time: '',
						menu: {},
            number: 0,
        }
    }
    onChange = (e, value) => {
			if(e === "menu"){
				this.setState({menu: value}, () => {
					console.log("========I came here==========>", value, this.state)
				});
				return null;
			} 
			this.setState({[e.target.name]: e.target.value}, ()=> {
				console.log("==================>",this.state)
			});	
    }
    handleButtonClick = () => {
        this.setState({
            number: this.state.number + 1
        })
    }

    render() {
      // const {name, date, time } = this.state;
        return (
          <div>
            <div className="heading-text">
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

									{props.number< questionsList.length - 1? <button onClick={props.handleButtonClick}> Next </button>: ""}
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
				{props.question.title}:
				{props.index === 0? <div><Date handleChange={props.onChange}/></div>: " "} 
				{props.index === 1? <div><Time handleChange={props.onChange}/></div>: " "} 
				{props.index === 2? <div><div><List /></div> <input type="text"  onChange={this.onChange} /> </div>: " "}
				{props.index === 3? <div><Theme handleChange={props.onChange}/></div>: " "} 
				{props.index === 4? <div><Type subQuestions={props.question.subQuestions} handleChange={props.onChange}/></div>: " "} 
				{props.index === 5? <div><Menu handleChange={props.onChange} /></div>: " "} 
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

export default NewParty;