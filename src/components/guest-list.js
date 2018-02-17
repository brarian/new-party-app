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
          <h3>Who's invited?</h3>
            <form >
              <input type="text" onChange={this.handleChange.bind(this)} />
              <button className="small-3 small-offset-3 medium-2 medium-offset-2 button small addguest" type="button" onClick={this.handleSubmit.bind(this)}>
              Add a Guest</button>
            </form>
          <List guests = {this.state.guestsList} /> 
        </div>
        <div className="small-12 medium-3 columns aside">
          <div className="tipTitle"> group dynamics </div>
            <div>Your guests don't need to know one another,
              but they should be able to socialize in a mixed group 
              if they don't. Be cognizant of how many people you invite, 
              a bigger party isn't necessarily always better. 
              <br />
              Expect 75% of your guest list to show up if they are close
              friends and 60% to show up if they aren't as close to you.  
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