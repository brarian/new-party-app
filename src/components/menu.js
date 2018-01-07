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

 handleSubmit = (e) => {
	alert(`you've picked this ${this.state.value}`);
}


 render(){
	 return (
		<div>
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
		</div>
	 );
 }
}

export default Menu