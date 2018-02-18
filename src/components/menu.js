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
			<div className="tipTitle"> Menu</div>
			When it comes to planning a party menu simpler is better. 
			If you're throwing a dinner party select 4 items (as specified in the form)
			to make or buy. You can start looking for recipes here: 
				<ul>
					<li> <a href="http://www.foodandwine.com/slideshows/easy-dinner-party-recipes" target="_blank" rel="noopener noreferrer"> Food and Wine </a> </li>
					<li><a href="https://www.buzzfeed.com/christinebyrne/very-easy-dinner-party#.dbmGdo7Xq" target="_blank" rel="noopener noreferrer">Buzzfeed</a></li>
				</ul>
			<div>If you're throwing a cocktail party select 4 hors d'oeuvres to make or buy and serve. </div>
				<ul>
					<li><a href="https://www.realsimple.com/food-recipes/recipe-collections-favorites/seasonal/make-ahead-hors-d-oeuvres-recipes" target="_blank" rel="noopener noreferrer">Real Simple</a></li>
					<li><a href="https://www.marthastewart.com/918650/quick-and-easy-appetizer-recipes" target="_blank" rel="noopener noreferrer">Martha Stewart</a></li>
				</ul>
			</div>
			</div>
		</div>
	);
 }
}

export default Menu