import React from 'react';
import { connect } from 'tls';

class Profile extends React.Component {
    render() {
        return (
            <div>
                <h1>Profile</h1>
                <div className="party-box">
                    <h1></h1>
                    <ul>
                        <div> Name: {this.props.name}</div>
                        <div> Email: {this.props.email}</div>
                        {/* component that renders recent parties */}
                            <div class="small-box" >
                                <div> <strong>Party Name: {this.props.partyname}</strong></div> 
                                <div>Party Date: {this.props.date}</div>  
                                <div>party Size: {this.props.size}</div>
                            </div>
                    </ul>
                </div>
            </div>
        )
    }
} 
//this is a higher order component
const connectedProfile = (props) => {
    return  (
        <Profile name={"Cliff"} email={"cliffsemail@gmail"} partyname={"Lori's Party"} date={"12/1/2017"} size={"20"}/>
    )
}
export default connectedProfile;
