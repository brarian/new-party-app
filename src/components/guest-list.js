/*eslint-disable no-unused-vars */
import React from 'react';

class GuestListForm extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   guest: '',
   guestsList: []
  };
 }
// don't put a height on this box
handleSubmit(e){
  e.preventDefault()
  this.setState({
    guestsList: [...this.state.guestsList, this.state.guest]
  }, () => {
  //updated state isn't available immediately, wait until the set state method 
  //is completely finished and then push it up
    this.props.handleChange('bigGuestList', this.state.guestsList);
  });
}
handleChange(e){
  e.preventDefault();
  this.setState({
    guest: e.target.value
  });
}
 render() {
  return ( 
    <div> 
      <div className="row"> 
        <div className="small-12 medium-8 columns main">
          <h3>{this.props.title}</h3>
            <form >
              <input type="text" onChange={this.handleChange.bind(this)} />
              <button type="button" onClick={this.handleSubmit.bind(this)}>
              Add a Guest</button>
            </form>
          <List guests = {this.state.guestsList} /> 
        </div>
        <div className="small-12 medium-3 columns aside">
          <div className="tipTitle"> group dynamics </div>
            <div>Your guests don't need to know one another,
              but they should be able to socialize in a mixed group 
              if they don't. And, of course, don't invite 
              friends who get along poorly with
                one another to the same party–that is unless you intend to
                make their hostility be the main event.
            </div>
          </div>
        </div>
    </div>
  );
 }
}

const List  = (props) => (
  <ul>
    {
     props.guests.map((guest, index) => <li key={index}>{guest}</li>)
    }
  </ul>
)


export default GuestListForm