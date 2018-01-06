import React from 'react';

class GuestListForm extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   guest: '',
   guestList: []
  };
 }

 onChange = (e) => {
  this.setState({guest: e.target.value});
}
onSubmit = (e) => {
  e.preventDefault()
  this.setState({
    guest: '',
    guestList: [...this.state.guestList, this.state.guest]
  })
}
 render() {
  return ( 
    <div> 
      <form onSumbit={this.addItem}>
        <input value={this.state.guest} onChange={this.onChange} />
        <input type="button" value="Submit"/>
      </form>
      <List guest = {this.state.guest} /> 
    </div>
  );
 }
}

const List = props => (
  <ul>
    {
     this.props.guest.map((guest, index) => <li key={index}>{guest}</li>)
    }
  </ul>
)

