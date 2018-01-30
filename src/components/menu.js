import React from "react";
import TipBox from './tipBox';

class Menu extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
		"side": "",
		"salad": "",
		"protien": "",
		"bread": ""
	};
 }

 handleSubmit = (e) => {
	 e.preventDefault();
	this.props.handleChange('menu', this.state);
}

 render(){
	 return (
		<div>
			<TipBox tips="you just need to make a few things"/>

			<h3>{this.props.title}</h3>
			<form>
				<label>
					side
					<input type="text" value={this.state.side} onChange={(e)=> this.setState({side: e.target.value})} />
				</label>
				<br />
				<label>
					salad
					<input type="text" value={this.state.salad} onChange={(e)=> this.setState({salad: e.target.value})} />
				</label>
				<br />
				<label>
					protien
					<input type="text" value={this.state.protien} onChange={(e)=> this.setState({protien: e.target.value})} />
				</label>
				<br />
				<label>
					bread
					<input type="text" value={this.state.bread} onChange={(e)=> this.setState({bread: e.target.value})} />
				</label>
				<button type="submit" onClick={this.handleSubmit}>Submit</button>
			</form>
		</div>
	 );
 }
}

export default Menu