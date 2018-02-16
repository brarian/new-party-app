/*eslint-disable no-unused-vars */

import React from "react";

class Menu extends React.Component {
 handleChange(e){
	e.preventDefault();
	this.props.handleChange('menu', e);
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
					<input type="text" name="side" onChange={this.handleChange.bind(this)} />
				</label>
				</div>

				<div className=" small-12 medium-8 medium-offset-2  columns">	
				<label>
					salad
					<input type="text" name="salad" onChange={this.handleChange.bind(this)} />
				</label>
				</div>

				<div className=" small-12 medium-8 medium-offset-2  columns">	
				<label>
					protien
					<input type="text" name="protien"  onChange={this.handleChange.bind(this)} />
				</label>
				</div>
				
				<div className=" small-12 medium-8 medium-offset-2  columns">	
				<label>
					bread
					<input type="text" name="bread"  onChange={this.handleChange.bind(this)} />
				</label>
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