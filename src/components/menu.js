/*eslint-disable no-unused-vars */

import React from "react";

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

 handleSubmit(e){
	e.preventDefault();
	this.props.handleChange('menu', this.state);
}

 render(){
	return (
		<div>
			<div className="row">
			<div className="small-12 medium-8 columns main">
			<h3>Menu</h3>
			<form>
			<div className="row">
				<div className=" small-12 medium-8 medium-offset-2  columns">
				<label>
					side
					<input type="text" value={this.state.side} onChange={(e)=> this.setState({side: e.target.value})} />
				</label>
				</div>

				<div className=" small-12 medium-8 medium-offset-2  columns">	
				<label>
					salad
					<input type="text" value={this.state.salad} onChange={(e)=> this.setState({salad: e.target.value})} />
				</label>
				</div>

				<div className=" small-12 medium-8 medium-offset-2  columns">	
				<label>
					protien
					<input type="text" value={this.state.protien} onChange={(e)=> this.setState({protien: e.target.value})} />
				</label>
				</div>
				
				<div className=" small-12 medium-8 medium-offset-2  columns">	
				<label>
					bread
					<input type="text" value={this.state.bread} onChange={(e)=> this.setState({bread: e.target.value})} />
				</label>
				</div>

				<div className="small-12 medium-8 medium-offset-2 columns">
					<button  className="button small-12 medium-8 " type="submit" onClick={this.handleSubmit}>Submit</button>
				</div>
				</div>
			</form>
		</div>
		<div className="small-12 medium-3 columns aside">
		<div className="tipTitle"> </div>

		</div>
		</div>
		</div>
	);
 }
}

export default Menu