import React from 'react';
import TipBox from './tipBox';
class GuestListForm extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   guest: '',
   guestsList: []
  };
 }

handleSubmit = (e) => {
  e.preventDefault()
  this.setState({
    guestsList: [...this.state.guestsList, this.state.guest]
  }, () => {
  //updated state isn't available immediately, wait until the set state method is completely finished and then push it up
    this.props.handleChange('bigGuestList', this.state.guestsList);
  });
}
handleChange= (e) => {
  e.preventDefault();
  this.setState({
    guest: e.target.value
  });
}
 render() {
  return ( 
    <div> 
      <div className="row party-box"> 
        <div class="small-12 medium-6 medium-offset-3 columns">
      <TipBox tips=""/>

      <h3>{this.props.title}</h3>
      <form >
        <input type="text" onChange={this.handleChange.bind(this)} />
        <button type="button" onClick={this.handleSubmit.bind(this)}>Add a Guest</button>
      </form>
      <List guests = {this.state.guestsList} /> 
        </div>
      </div>
    </div>
  );
 }
}

const List = (props) => (
  <ul>
    {
     props.guests.map((guest, index) => <li key={index}>{guest}</li>)
    }
  </ul>
)


export default GuestListForm